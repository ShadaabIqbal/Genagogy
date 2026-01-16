const express = require("express");
const router = express.Router();
const {
  registerStudent,
  loginStudent,
  getMyProfile,
} = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/me", authMiddleware, getMyProfile);

module.exports = router;
