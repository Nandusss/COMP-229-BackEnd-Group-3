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
            default: 'Available'
        },
        activeDate: {
            type: Date,
            format: "%Y/%d/%m",
            default: Date()
        },
        expiryDate: {
            type: Date,
            format: "%Y/%d/%m"
        },
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
        },
        inquiries: [
            {
                username: {
                    type: String,
                    default: 'Anonymous'
                },
                question: String,
                answer: String
            }
        ]
    },
    {
        collection: "Advertisements"
    }
);

module.exports = mongoose.model('Advertisement', advertisementSchema);