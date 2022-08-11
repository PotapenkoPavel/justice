const User = require('../models/user')
const fs = require("fs");
const UploadImage = require("../models/uploadImage");

const getUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(id).populate('avatar', '-_id -__v -filename')

    if (!user) res.status(400).json({ message: 'Cannot find user' })

    const { email, firstName, lastName, description, avatar} = user

    console.log(user)

    res.status(200).json({ id, email, firstName, lastName, description, avatar })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateUserData = async (req, res) => {
  try {
    const { id } = req.params
    const { firstName, lastName, description } = req.body

    if (!(firstName !== undefined && lastName !== undefined && description !== undefined )) {
      return res.status(400).json({ message: 'Please provide firstName, lastName, and description of user for update information '})
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
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

    const { _id: imageId } = await uploadImage.save()

    // update user avatar
    const { id } = req.params

    await User.findByIdAndUpdate(id, { avatar: imageId })

    return res.status(200).json({ mimetype: file.mimetype, imageBase64 })
  } catch(error) {
    return res.status(500).json({ error })
  }
}

const deleteUserAvatar = async (req, res) => {
  try {
    const { id: userId } = req.params

    const { id, email, firstName, lastName, description, avatar } = await User.findByIdAndUpdate(userId, { avatar: null }, { new: true })

    const response = { id, email, firstName, lastName, description, avatar }

    res.status(200).json(response)
  } catch(error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getUser,
  updateUserData,
  updateUserAvatar,
  deleteUserAvatar
}
