const express = require('express');
const ctrl = require('../controllers/soundbordController');
const router = express.Router();

router.get('/', ctrl.home);
router.post('/add');

module.exports = router;
