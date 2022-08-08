const express = require('express');

const checkValidationResults = require('../middleware/check-validation-results');
const { register, login } = require('../controllers/auth');
const registerSchema = require('../schemas/register-schema');
const loginSchema = require('../schemas/login-schema');

const router = express.Router();

// authorization
router.post('/auth/register', registerSchema, checkValidationResults, register);

router.post('/auth/login', loginSchema, checkValidationResults,  login);

router.get('/auth/test', (req, res) => {
  return res.status(200).json({ message: 'test endpoint' })
})

module.exports = router;
