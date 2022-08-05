const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    match: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&]).*$/)
  },
  firstName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxLength: 1024
  }
})

module.exports = model('User', userSchema)
