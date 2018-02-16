const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const soundSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please provide a sound title'
  },
  keyCode: Number,
  keyBind: String,
  audio: String
});

module.exports = mongoose.model('Audio', soundSchema);
