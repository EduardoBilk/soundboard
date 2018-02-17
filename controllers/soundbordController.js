const mongoose = require('mongoose');
const Audio = mongoose.model('Audio');
const multer = require('multer');
const uuid = require('uuid');

const multerOptions = {
  storage: multer.diskStorage({
    destination: function(req, file, next) {
      next(null, './public/uploads');
    },
    filename: function(req, file, next) {
      const extension = file.mimetype.split('/')[1];
      console.log('opt', file.mimetype);
      req.body.audio = `${uuid.v4()}.${extension}`;
      next(null, req.body.audio);
    }
  }),
  fileFilter(req, file, next) {
    const isAudio = file.mimetype.startsWith('audio/');
    if (isAudio) {
      next(null, true);
    } else {
      next({ message: "That filetype isn't allowed" }, false);
    }
  }
};

exports.home = (req, res) => {
  res.render('soundboard', { title: 'L.A.G.' });
};

exports.add = multer(multerOptions).single('audio');

exports.saveAudio = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const audio = await new Audio(req.body).save();
  res.redirect(`/`);
};
