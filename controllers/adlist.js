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

// create a reference to the model
let AdlistModel = require('../models/adlist');
let moment = require('moment'); //moment to parse the dates in correct format

module.exports.adlist = function(req, res, next) {  
    AdlistModel.find((err, AdList) => {
        //console.log(AdList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('ads/list', {
                title: 'Ad List', 
                AdList: AdList,
                moment: moment,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    AdlistModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.log(itemToEdit);
            //show the edit view
            res.render('ads/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                moment: moment,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedItem = AdlistModel({
        _id: req.body.id,
        item: req.body.item,
        status: req.body.status,
        activeDate: req.body.activeDate,
        expiryDate: req.body.expiryDate,
        description : {
            title: req.body.title,
            bodyDesc: req.body.bodyDesc,
            category: req.body.category,
            condition: req.body.condition,
            price: req.body.price
        },
    });

    AdlistModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/ads/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    AdlistModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/ads/list');
        }
    });

}


module.exports.displayAddPage = (req, res, next) => {

    let newItem = AdlistModel();

    res.render('ads/add_edit', {
        title: 'Add a new Item',
        item: newItem,
        moment: moment,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = AdlistModel({
        _id: req.body.id,
        item: req.body.item,
        status: req.body.status,
        activeDate: req.body.activeDate,
        expiryDate: req.body.expiryDate,
        description : {
            title: req.body.title,
            bodyDesc: req.body.bodyDesc,
            category: req.body.category,
            condition: req.body.condition,
            price: req.body.price,
        },
    });

    AdlistModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/ads/list');
        }
    });
    
}

//Display the details page
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    AdlistModel.findById(id, (err, Adlist) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('ads/details', {
                title: 'Ad Details', 
                adItem: Adlist,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}