const User = require('../models/user')
const fs = require("fs");
const UploadImage = require("../models/uploadImage");

const getUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(id, null, { select: '-password'}).populate('avatar')

    if (!user) res.status(400).json({ message: 'Cannot find user' })

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateUserData = async (req, res) => {
  try {
    const { id } = req.params
    const { firstName, lastName, description } = req.body

    if (!(firstName !== undefined && lastName !== undefined && description !== undefined )) {
      return res.status(400).json({ message: 'Please provide firstName, lastName, and description of user for update information '})
    }

    const user = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
      description
    }, { new: true })

    res.status(200).json({ firstName, lastName, description })
  } catch(error) {
    res.status(500).json({ error })
  }
}

const updateUserAvatar = async (req, res) => {
  try {
    const file = req.file

    if (!file) return res.status(400).json({ message: "Please provide an avatar image" })

    const imageBase64 = fs.readFileSync(file.path).toString('base64')

    const uploadImage = new UploadImage({
      filename: file.filename,
      contentType: file.mimetype,
      imageBase64
    })

    const avatar = await uploadImage.save()

    // update user avatar
    const { id } = req.params

    await User.findByIdAndUpdate(id, { avatar: avatar._id })

    return res.status(200).json(avatar)
  } catch(error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteUserAvatar = async (req, res) => {
  try {
    const { id: userId } = req.params

    await User.findByIdAndUpdate(userId, { avatar: null })

    res.status(204)
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getUser,
  updateUserData,
  updateUserAvatar,
  deleteUserAvatar
}
