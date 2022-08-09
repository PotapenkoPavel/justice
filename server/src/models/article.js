const { Schema, Types, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Types.ObjectId,
    ref: 'User'
  },
  HTML: {
    type: String,
    required: true
  },
  previewImage: {
    type: Types.ObjectId,
    ref: 'UploadImage'
  },
  previewText: {
    type: String,
    required: true,
    maxLength: 2048,
  },
  timestamp: {
    type: Date
  },
  tag: {
    type: String,
    required: true
  },
  viewsCount: {
    type: Number
  }
})

module.exports = model('Article', schema)