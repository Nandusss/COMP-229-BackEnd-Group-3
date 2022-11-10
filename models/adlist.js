let mongoose = require('mongoose');

// Create a model class
let AdlistModel = mongoose.Schema(
    {
        item: String,
        status: String,
        datePosted: Date,
        expiryDate: Date,
        description: {
            title: String,
            bodyDesc: String,
            price: Number
        }
    },
    {
        collection: "Adlist"
    }
);

module.exports = mongoose.model('Adlist', AdlistModel);