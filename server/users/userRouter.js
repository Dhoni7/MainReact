'use strict';
const router = require('express').Router();
const userCtrl = require('./userController');
const logger = require('./../../applogger');
const userModel = require('./userEntity').userModel;

router.post('/add', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
    let user = new userModel(req.body);
    user.save(function(err){
    if(err){
      res.send(err);
    }
		if(req.body.userName == null){
			res.send('input mismatch');
		}
    else{
       res.json({message:'User saved successfully'});
    }
    });
  }
})

// router.post('/add', function(req, res) {
//     logger.debug("Inside user post");
//     let user = req.body;
//     res.send('Hello '+user);
// });
//
// // Get details of all user in the system
// router.get('/', function(req, res) {
//   console.log('Inside get');
//   res.send('response from user GET route check');
// });

module.exports = router;
