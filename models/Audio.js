const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const audioSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please provide a sound title'
  },
  keyCode: Number,
  keyBind: String,
  audio: String
});

audioSchema.pre('save', async function(next) {
  //não pode ser arrow function pq o this precisa ser a instância do schama que vai ser salvo e não quem chamou.
  if (!this.isModified('name')) {
    return next();
  }
  this.keyCode = this.keyBind.charAt(0);
  next(); // middleware concept
});

module.exports = mongoose.model('Audio', audioSchema);
