let mongoose = require('mongoose');

// Create a model class
let AdlistModel = mongoose.Schema(
    {
        item: String,
        status: {
            type: String,
            enum: ['Available','Sold'],
            default: 'Available'
        },
        datePosted: Date,
        expiryDate: Date,
        description: {
            title: String,
            bodyDesc: String,
            category: String,
            condition: String,
            price: Number
        }
    },
    {
        collection: "Adlist"
    }
);

module.exports = mongoose.model('Adlist', AdlistModel);