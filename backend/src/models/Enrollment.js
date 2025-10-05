const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
    source: { type: String, trim: true },
  },
  { timestamps: true }
);

enrollmentSchema.index({ email: 1, course: 1, createdAt: -1 });

module.exports = mongoose.model("Enrollment", enrollmentSchema);


