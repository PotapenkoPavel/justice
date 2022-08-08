const bcrypt = require("bcryptjs");

const User = require("../models/user");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const candidate = await User.findOne().where({ email });

    if (candidate)
      return res
        .status(409)
        .json({ message: "User with this email already exists" });

    const user = new User({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password),
    });

    const result = await user.save();

    res.status(200).json({ message: "user created", data: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register };
