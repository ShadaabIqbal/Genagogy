const express = require("express");
const {
  createEnrollment,
  getEnrollments,
  getEnrollmentById,
  deleteEnrollment,
  updateEnrollment,
} = require("../controllers/enrollmentController");

const router = express.Router();

router.post("/", createEnrollment);
router.get("/", getEnrollments);
router.get("/:id", getEnrollmentById);
router.delete("/:id", deleteEnrollment);
router.put("/:id", updateEnrollment);

module.exports = router;


