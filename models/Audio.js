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
  console.log('chamou pre');
  if (!this.isModified('title')) {
    console.log('denied');
    return next();
  }
  console.log('associou');
  this.keyCode = this.keyBind.toUpperCase().charCodeAt(0);
  next(); // middleware concept
});

module.exports = mongoose.model('Audio', audioSchema);
