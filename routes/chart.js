var express = require('express');
const router = express.Router();
const chartController = require('../controller/chartController');

router.get('/chart', chartController.getChart );


module.exports = router;