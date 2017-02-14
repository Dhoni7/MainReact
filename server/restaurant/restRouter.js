'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const RestaurantModel = require('./restEntity').restaurantModel;

// adding restaurants
router.post('/add', function(req, res) {
    logger.debug(JSON.stringify(req.body));
    if (req.body.id !== null) {
        let restaurant = new RestaurantModel(req.body);
        restaurant.save(function(err) {
            if (err) {
                res.send('some error occurred');
            } else {
                res.send('Restaurant save successfully');
            }
        });
    } else {
        res.send('enter a valid restaurant Id');
    }
});

router.post('/display', function(req, res) {
    logger.debug('Received request' + JSON.stringify(req.body));
    if (req.body.id !== null) {
        RestaurantModel.find({
            $or: [{
                id: req.body.id
            }]
        }, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    } else {
        res.send('enter a valid restaurantId');
    }
});

router.get('/displayAll', function(req, res) {
    logger.debug('Received request' + JSON.stringify(req.body));
    if (req.body) {
        RestaurantModel.find(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
});

router.put('/update', function(req, res) {
    logger.debug('Received request' + JSON.stringify(req.body));
    if (req.body.id !== null) {
        RestaurantModel.update({
            id: req.body.id
        }, {
            $set: {
                location: req.body.location
            }
        }, function(err) {
            if (err) {
                res.send('err');
            } else {
                res.send('Restaurant updated successfully');
            }
        });
    } else {
        res.send('enter a valid restaurantId');
    }
});

router.delete('/delete', function(req, res) {
    let resId = Number(req.body.id);
    if (resId !== null) {
        RestaurantModel.remove({
            id: resId
        }, function(err) {
            if (err) {
                res.send('err');
            } else {
                res.send('Restaurant deleted successfully' + resId + 'successfully');
            }
        });
    }
});
module.exports = router;
