const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&]).*$/,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxLength: 1024,
    default: null
  },
  avatar: {
    type: Types.ObjectId,
    ref: 'UploadImage',
    default: null
  }
});

userSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

userSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
})

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
})

module.exports = model('User', userSchema);
