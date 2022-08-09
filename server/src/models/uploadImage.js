const { Schema, model } = require('mongoose')

const schema = new Schema({
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

module.exports = model('UploadImage', schema)