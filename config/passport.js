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

const passport = require('passport');
const User = require('../models/user');

module.exports = function() {
  
  passport.serializeUser((user, done) => {
    console.log('=====> serializeUser');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({_id: id}, '-password -salt', (err, user) => {
      console.log('=====> deserializeUser');
      done(err, user);
    });
  });

  require('./local')();
};