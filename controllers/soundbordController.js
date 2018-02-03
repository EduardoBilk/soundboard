const mongoose = require('mongoose');
const Store = mongoose.model('Sound');
const multer = require('multer');

exports.home = (req, res) => {
  res.render('soundboard', { title: 'L.A.G.' });
};

exports.add = (req, res) => {
  res.render('soundboard', { title: 'L.A.G.' });
};
