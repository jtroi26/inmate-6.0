var express = require('express');
const router = express.Router();
const tablesController = require('../controller/tablesController');

router.get('/tables', tablesController.gettables );

module.exports = router;