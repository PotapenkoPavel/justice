const express = require("express");

const checkValidationResults = require("../middleware/check-validation-results");
const registerSchema = require("../schemas/register-schema");
const { register, login } = require("../controllers/auth");

const router = express.Router();

// authorization
router.post("/auth/register", registerSchema, checkValidationResults, register);

router.post("/auth/login", (req, res) => {
  res.status(200).json({ message: "login endpoint" });
});

module.exports = router;
