// create a reference to the model
let AdlistModel = require('../models/adlist');

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
            //show the edit view
            res.render('ads/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
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
        datePosted: req.body.datePosted,
        expiryDate: req.body.expiryDate,
        description : {
            title: req.body.title,
            body: req.body.bodyDesc,
            category: req.body.category,
            condition: req.body.condition,
            price: req.body.price,
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
            // console.log(req.body);
            // refresh the book list
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
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newItem = AdlistModel({
        _id: req.body.id,
        item: req.body.item,
        status: req.body.status,
        datePosted: req.body.datePosted,
        expiryDate: req.body.expiryDate,
        description : {
            title: req.body.title,
            body: req.body.bodyDesc,
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