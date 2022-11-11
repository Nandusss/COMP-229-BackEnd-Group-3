var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);
router.get('/home', controlerIndex.home);

module.exports = router;