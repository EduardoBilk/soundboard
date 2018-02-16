const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/soundbordController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', ctrl.home);
router.post('/add', ctrl.add, catchErrors(ctrl.saveAudio));

module.exports = router;
