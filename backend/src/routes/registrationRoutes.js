const express = require("express");
const {
  createRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registrationController");

const router = express.Router();

// Create a registration (from an enrollment)
router.post("/", createRegistration);

// Get all registrations
router.get("/", getRegistrations);

// Update a registration
router.put("/:id", updateRegistration);

// Delete a registration (optional)
router.delete("/:id", deleteRegistration);

module.exports = router;
