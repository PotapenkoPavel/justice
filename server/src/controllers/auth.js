const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/user');
const config = require('../config/keys')

const register = async (req, res) => {
  try {
    const {
      firstName, lastName, email, password,
    } = req.body;

    const candidate = await User.findOne().where({ email });

    if (candidate) {
      return res
        .status(409)
        .json({ message: 'User with this email already exists' });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password),
    });

    const { _id } = await user.save();

    const token = jwt.sign(
      { userId: _id, email },
      config.JWTSecret,
      { expiresIn: "7 days"}
    )

    return res.status(200).json({ message: 'user created', token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const candidate = await User.findOne().where({ email })

    if (!candidate)
      return res.status(400).json({ message: "Please provide a valid email or password"})

    const match = bcrypt.compareSync(password, candidate.password)

    if (!match)
      return res.status(400).json({ message: "Please provide a valid email or password"})

    const token = jwt.sign(
      { userId: candidate._id, email },
      config.JWTSecret,
      { expiresIn: "7 days"}
    )

    return res.status(200).json({ message: 'Welcome!', token })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login };
