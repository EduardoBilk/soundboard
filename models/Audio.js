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
    return next();
  }
  const audioWithSameKeyBind = await this.constructor.find({ keyBind: this.keyBind });
  if (audioWithSameKeyBind.length) {
    next({ message: 'There is already a song with this Key Bind in our database, sorry.' }, false);
  }
  this.keyCode = this.keyBind.toUpperCase().charCodeAt(0);
  next(); // middleware concept
});

module.exports = mongoose.model('Audio', audioSchema);
