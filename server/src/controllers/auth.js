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

    const { id } = await user.save();

    const token = jwt.sign(
      { userId: id },
      config.JWTSecret,
      { expiresIn: "7 days"}
    )

    return res.status(200).json({ token, userId: id });
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

    const { id, firstName, lastName, avatar } = await candidate.populate('avatar', '-_id -__v -filename')

    const token = jwt.sign(
      { userId: id },
      config.JWTSecret,
      { expiresIn: "7 days"}
    )

    return res.status(200).json({ token, userId: id})
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const sendTokenPayload = async (req, res) => {
  try {
    const token = req.token
    const { userId } = req.tokenPayload

    return res.status(200).json({ token, userId })
  } catch (err) {
    return res.status(401).json({ message: 'invalid token' })
  }

  return res.status(200).json({ message: 'verify-token endpoint' })
}

module.exports = { register, login, sendTokenPayload };
