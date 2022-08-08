const { validationResult } = require('express-validator');

// eslint-disable-next-line consistent-return
const checkValidationResults = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json({ message: errors });

  next();
};

module.exports = checkValidationResults;
