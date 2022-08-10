const { Schema, Types, model } = require('mongoose')

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
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
  viewsCount: {
    type: Number,
    default: 0
  }
})

module.exports = model('Article', articleSchema)