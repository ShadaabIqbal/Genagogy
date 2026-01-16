const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    // ---------- Basic Identity ----------
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    // ---------- Authentication ----------
    password: {
      type: String,
      required: true,
      select: false, // VERY IMPORTANT (never return password by default)
    },

    role: {
      type: String,
      enum: ["student"],
      default: "student",
    },

    // ---------- Account Status ----------
    isActive: {
      type: Boolean,
      default: true,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    // ---------- Profile (optional but useful) ----------
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    dateOfBirth: {
      type: Date,
    },

    address: {
      type: String,
      trim: true,
    },

    // ---------- Metadata ----------
    registeredVia: {
      type: String,
      enum: ["website", "admin", "campaign"],
      default: "website",
    },

    lastLoginAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
