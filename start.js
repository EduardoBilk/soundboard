const mongoose = require('mongoose');

require('dotenv').config(); // import environm variables
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 → ${err.message}`);
});
require('./models/Audio'); // and start all up!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
