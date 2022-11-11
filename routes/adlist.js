var express = require('express');
var router = express.Router();

let adlistController = require('../controllers/adlist');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET list of items */
router.get('/list', adlistController.adlist);

// Routers for edit
router.get('/edit/:id', adlistController.displayEditPage);
router.post('/edit/:id', adlistController.processEditPage);

// Delete
router.get('/delete/:id', adlistController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', adlistController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', adlistController.processAddPage);

module.exports = router;