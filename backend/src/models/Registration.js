// models/Registration.js
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    enrollmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
      unique: true, // one registration per enrollment
    },
    photo: { type: String }, // URL of uploaded photo
    address: { type: String },
    dob: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    guardianName: { type: String },
    guardianPhone: { type: String },
    batch: { type: String },
    courseDuration: { type: String },
    courseFee: { type: Number },
    paymentStatus: { type: String, enum: ["Paid", "Pending"], default: "Paid" },
    registrationDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registration", registrationSchema);
