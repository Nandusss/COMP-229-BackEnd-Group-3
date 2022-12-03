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
let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let authController = require('../controllers/auth');

/* GET users listing. */
router.get('/me', authController.requireAuth, usersController.myprofile);

router.patch('/user/:id', authController.requireAuth, usersController.updateProfile)
// router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// router.get('/signout', usersController.signout);

module.exports = router;
