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

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

module.exports.adlist = async function(req, res, next) {
    try {
        let Adlist = await AdlistModel.find().populate({
            path: 'owner',
            select: 'firstName lastName email username admin created'
        });

        res.status(200).json(Adlist);
        
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }
}


module.exports.processEditPage = (req, res, next) => {
    try {
        let id = req.params.id;

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
            tags: (req.body.tags == null || req.body.tags == "") ? "": req.body.tags.split(",").map(word => word.trim()),
            // If it does not have an owner it assumes the ownership otherwise it transfers it.
            // owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner 
        });
    
        AdlistModel.updateOne({_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
 
                return res.status(400).json(
                    { 
                        success: false, 
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        success: true,
                        message: 'Item updated successfully.'
                    }
                )
            }
        });
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }
}


module.exports.performDelete = (req, res, next) => {
    try {
        let id = req.params.id;

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
            tags: (req.body.tags == null || req.body.tags == "") ? "": req.body.tags.split(",").map(word => word.trim()),
            // If it does not have an owner it assumes the ownership otherwise it transfers it.
            // owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner 
        });
    
        AdlistModel.updateOne({_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
 
                return res.status(400).json(
                    { 
                        success: false, 
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        success: true,
                        message: 'Item updated successfully.'
                    }
                )
            }
        });
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }
}

module.exports.processAddPage = (req, res, next) => {
    try {
        let id = req.params.id;

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
            tags: (req.body.tags == null || req.body.tags == "") ? "": req.body.tags.split(",").map(word => word.trim()),
            // If it does not have an owner it assumes the ownership otherwise it transfers it.
            // owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner 
        });
    
        AdlistModel.updateOne({_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
 
                return res.status(400).json(
                    { 
                        success: false, 
                        message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        success: true,
                        message: 'Item updated successfully.'
                    }
                )
            }
        });
    } catch (error) {
        return res.status(400).json(
            { 
                success: false, 
                message: getErrorMessage(error)
            }
        );
    }
}