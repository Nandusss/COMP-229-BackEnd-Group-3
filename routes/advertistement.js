/*
	Comp-229 Web Application Development Group 3
	Chafanarosa Buy and Sell Used Products
	This Website will enable users to post and view advertisements for used		
	products
	
	Developers
	Fatimah Binti Yasin – 301193282
	Nandagopan Dilip – 301166925
	Chantelle Lawson – 301216199
	Ronald Jr Ombao – 301213219
	Santiago Sanchez Calle – 300648373

	Copyright All Rights Reserved
*/

var express = require('express');
var router = express.Router();

<<<<<<< Updated upstream:routes/adlist.js
let adlistController = require('../controllers/adlist');
=======
let advertisementController = require('../controllers/advertisement');
>>>>>>> Stashed changes:routes/advertisement.js
let authController = require('../controllers/auth');


/* GET list of items */
router.get('/list', adlistController.adlist);

// Routers for edit
router.post('/edit/:id', adlistController.processEditPage);

// Delete
router.get('/delete/:id', adlistController.performDelete);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', adlistController.processAddPage);

module.exports = router;