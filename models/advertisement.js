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

let mongoose = require('mongoose');

// Create a model class
let advertisementSchema = mongoose.Schema(
    {
        adsTitle: String,
        price: Number,
        status: {
            type: String,
            enum: ['available', 'sold'],
            default: 'available'
        },
        activeDate: {
            type: Date,
            default: Date()
        },
        expiryDate: Date,
        description: {
            itemName: String,
            description: String,
            category: {
                type: String,
                enum: ['cars', 'electronics', 'fashion', 'sports', 'others']
            },
            condition: {
                type: String,
                enum: ['new', 'likeNew', 'used']
            }
        },
        // Adds relationship with User
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        collection: "Advertisements"
    }
);

module.exports = mongoose.model('Advertisement', advertisementSchema);