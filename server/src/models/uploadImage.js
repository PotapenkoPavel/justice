const { Schema, model, Types} = require('mongoose')

const uploadImageSchema = new Schema({
  filename: {
    type: String,
    unique: true,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  imageBase64: {
    type: String,
    required: true
  }
})

module.exports = model('UploadImage', uploadImageSchema)