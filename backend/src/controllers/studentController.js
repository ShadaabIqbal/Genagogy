const Student = require("../models/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


/**
 * Generate JWT
 */
function generateToken(student) {
  return jwt.sign(
    { id: student._id, role: student.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

/**
 * @route   POST /api/students/register
 * @desc    Register new student
 */
async function registerStudent(req, res, next) {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({
        message: "Student already registered with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });

    const token = generateToken(student);

    return res.status(201).json({
      message: "Registration successful",
      token,
      student: {
        id: student._id,
        fullName: student.fullName,
        email: student.email,
        phone: student.phone,
      },
    });
  } catch (error) {
    next(error);
  }
}

/**
 * @route   POST /api/students/login
 * @desc    Login student
 */
async function loginStudent(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const student = await Student.findOne({ email }).select("+password");
    if (!student) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!student.isActive) {
      return res.status(403).json({
        message: "Your account is inactive. Please contact institute.",
      });
    }

    student.lastLoginAt = new Date();
    await student.save();

    const token = generateToken(student);

    return res.json({
      message: "Login successful",
      token,
      student: {
        id: student._id,
        fullName: student.fullName,
        email: student.email,
        phone: student.phone,
      },
    });
  } catch (error) {
    next(error);
  }
}

/**
 * @route   GET /api/students/me
 * @desc    Get logged-in student profile
 */
async function getMyProfile(req, res, next) {
  try {
    const student = await Student.findById(req.user.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.json(student);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerStudent,
  loginStudent,
  getMyProfile,
};
