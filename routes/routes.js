const express = require('express');

const router = express.Router();

// authorization
router.post('/auth/register', (req, res) => {
  res.status(200).json({ message: 'register endpoint' });
});

router.post('/auth/login', (req, res) => {
  res.status(200).json({ message: 'login endpoint' });
});

module.exports = router;
