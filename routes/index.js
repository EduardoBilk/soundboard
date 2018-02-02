const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('layout', { title: 'L.A.G.' });
});

module.exports = router;
