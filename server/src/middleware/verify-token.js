const jwt = require("jsonwebtoken");
const config = require("../config/keys");

const verifyToken = (req, res, next) => {
  try {
    const authorization = req.headers.authorization

    if (!authorization) return res.status(400).json({ message: 'Cannot get authorization token' })

    if (!authorization.includes('Bearer')) return res.status(400).json({ message: 'Cannot get authorization token' })

    const token = authorization.slice(7)

    const decoded = jwt.verify(token, config.JWTSecret)

    req.token = token
    req.tokenPayload = decoded

    next()
  } catch (error) {
    return res.status(401).json({ message: 'invalid token'})
  }
}

module.exports = verifyToken