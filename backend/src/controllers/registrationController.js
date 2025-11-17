const Registration = require("../models/Registration");
const Enrollment = require("../models/Enrollment");

// Create registration from an enrollment
async function createRegistration(req, res, next) {
  try {
    const {
      enrollmentId,
      photo,
      address,
      dob,
      gender,
      guardianName,
      guardianPhone,
      batch,
      courseDuration,
      courseFee,
      paymentStatus,
    } = req.body;

    // Check enrollment exists
    const enrollment = await Enrollment.findById(enrollmentId);
    if (!enrollment)
      return res.status(404).json({ message: "Enrollment not found" });

    // Check if already registered
    const existing = await Registration.findOne({ enrollment: enrollmentId });
    if (existing)
      return res.status(400).json({ message: "Student already registered" });

    // Create registration
    const registration = await Registration.create({
      enrollmentId: enrollmentId,
      courseDuration,
      courseFee,
      photo,
      address,
      dob,
      gender,
      guardianName,
      guardianPhone,
      batch,
      paymentStatus: paymentStatus,
    });

    return res.status(201).json(registration);
  } catch (error) {
    return next(error);
  }
}

// Get all registrations
async function getRegistrations(req, res, next) {
  try {
    const registrations = await Registration.find()
      .populate("enrollment") // populate enrollment info like name/email
      .sort({ createdAt: -1 });

    return res.json(registrations);
  } catch (error) {
    return next(error);
  }
}

// Update registration
async function updateRegistration(req, res, next) {
  try {
    const updates = req.body;
    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );
    if (!registration)
      return res.status(404).json({ message: "Registration not found" });
    return res.json(registration);
  } catch (error) {
    return next(error);
  }
}

// Optionally delete registration
async function deleteRegistration(req, res, next) {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (!registration)
      return res.status(404).json({ message: "Registration not found" });
    return res.json({ message: "Registration deleted" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration,
};
