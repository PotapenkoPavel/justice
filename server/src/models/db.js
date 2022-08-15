const { mongoose } = require('mongoose');
const { mongoURI } = require('../config/keys');

mongoose.connect(mongoURI)
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.log(err.message));
