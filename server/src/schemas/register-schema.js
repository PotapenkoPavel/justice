const { body } = require('express-validator');

const schema = [
  body('email').isEmail().normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&]).*$/),
  body('firstName').isLength({ min: 3, max: 24 }),
  body('lastName').isLength({ min: 3, max: 24 }),
];

module.exports = schema;
