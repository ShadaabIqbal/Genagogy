const Enrollment = require("../models/Enrollment");

async function createEnrollment(req, res, next) {
  try {
    const { name, email, phone, course, message, source } = req.body;
    if (!name || !email || !phone || !course) {
      return res.status(400).json({ message: "name, email, phone, and course are required" });
    }
    const enrollment = await Enrollment.create({ name, email, phone, course, message, source });
    return res.status(201).json(enrollment);
  } catch (error) {
    return next(error);
  }
}

async function getEnrollments(req, res, next) {
  try {
    const { course, from, to, q } = req.query;
    const filter = {};
    if (course) filter.course = course;
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { phone: { $regex: q, $options: "i" } },
      ];
    }
    if (from || to) {
      filter.createdAt = {};
      if (from) filter.createdAt.$gte = new Date(from);
      if (to) filter.createdAt.$lte = new Date(to);
    }
    const enrollments = await Enrollment.find(filter).sort({ createdAt: -1 });
    return res.json(enrollments);
  } catch (error) {
    return next(error);
  }
}

async function getEnrollmentById(req, res, next) {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });
    return res.json(enrollment);
  } catch (error) {
    return next(error);
  }
}

async function deleteEnrollment(req, res, next) {
  try {
    const deleted = await Enrollment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Enrollment not found" });
    return res.json({ message: "Enrollment deleted" });
  } catch (error) {
    return next(error);
  }
}

async function updateEnrollment(req, res, next) {
  try {
    const allowed = ["name", "email", "phone", "course", "message", "source"];
    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([k]) => allowed.includes(k))
    );
    const updated = await Enrollment.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: "Enrollment not found" });
    return res.json(updated);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createEnrollment,
  getEnrollments,
  getEnrollmentById,
  deleteEnrollment,
  updateEnrollment,
};


