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

uploadImageSchema.set('toObject', { versionKey: false })
uploadImageSchema.set('toJSON', { versionKey: false })

module.exports = model('UploadImage', uploadImageSchema)