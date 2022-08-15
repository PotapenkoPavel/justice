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
  img: {
    type: Types.ObjectId,
    ref: 'UploadImage'
  },
  description: {
    type: String,
    required: true,
    maxLength: 2048,
  },
  timestamp: {
    type: Date
  },
  readTimeInMinutes: {
    type: Number,
    required: true
  },
  views: {
    type: Number,
    default: 0
  }
})

articleSchema.set('toObject', { versionKey: false })
articleSchema.set('toJSON', { versionKey: false })

module.exports = model('Article', articleSchema)