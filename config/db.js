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

// In real project, never expose your credential in your code.
let atlasDB = "mongodb+srv://Admin:Xe1zwQXxEToJslV9@cluster0.6esmdck.mongodb.net/CBS?retryWrites=true&w=majority"

let mongoose = require('mongoose');

module.exports = function () {

	// Connect to the database
	mongoose.connect(atlasDB);

	let mongodb = mongoose.connection;
	mongodb.on('error', console.error.bind(console, 'Connection Error:'));
	mongodb.once('open', () => {
		console.log('==== Connected to MongoDB ====');
	});

	return mongodb;
}