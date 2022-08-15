const { body } = require('express-validator');

const schema = [
  body('email').isEmail().normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&]).*$/),
];

module.exports = schema;
