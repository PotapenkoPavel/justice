const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/user');
const config = require('../config/keys')
const {decode} = require("jsonwebtoken");

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
      { _id, email, firstName, lastName },
      config.JWTSecret,
      { expiresIn: "7 days"}
    )

    const responseData = {
      token,
      user: { _id, email, firstName, lastName }
    }

    return res.status(200).json(responseData);
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
      { email,
        _id: candidate.id,
        firstName: candidate.firstName,
        lastName: candidate.lastName
      },
      config.JWTSecret,
      { expiresIn: "7 days"}
    )

    const responseData = {
      token,
      user: {
        email,
        _id: candidate.id,
        firstName: candidate.firstName,
        lastName: candidate.lastName
      }
    }

    return res.status(200).json(responseData)
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const verifyToken = async (req, res) => {
  try {
    const authorization = req.headers.authorization

    if (authorization && authorization.includes('Bearer')) {
      const token = authorization.slice(7)

      const decoded = jwt.verify(token, config.JWTSecret)

      return res.status(200).json({
        token,
        user: {
          _id: decoded._id,
          email: decoded.email,
          firstName: decoded.firstName,
          lastName:  decoded. lastName
        }
      })
    }
    return res.status(401).json({ message: 'ivalid token'})
  } catch (err) {
    return res.status(401).json({ message: 'invalid token' })
  }


  return res.status(200).json({ message: 'verify-token endpoint' })
}

module.exports = { register, login, verifyToken };
