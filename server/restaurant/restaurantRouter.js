'use strict';
const router = require('express').Router();
const logger = require('./../../applogger');
//const userCtrl = require('./userController');
const bodyparser = require('body-parser');
const ResModel = require('./restaurantEntity').ResModel;
// var app = express();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
extended: true
}));

router.post('/ResAdd', function(req, res) {
    if(req.body)
    {
      let m1 = new ResModel(req.body);
       m1.save(function(err)
       {
         if(err)
         {
           res.send(err);
         }
    else{
      res.send('restaurant values updated successfully');
    }
});
}
});

router.get('/View', function(req, res) {
    if(req.body)
    {
      //let m1 = new ResModel(req.body);
       ResModel.find(function(err, lists)
       {
         if(err)
         {
           res.send(err);
         }
    else{
      res.send(lists);
    }
});
}
});

router.put('/Update', function(req, res) {
  {

    if(req.body)
      // let m1 = new ResModel(req.body);
       ResModel.update({location: req.body.location},
         { $set: {Name: req.body.Name}}, function(err, lists)
       {
         if(err)
         {
           res.send(err);
         }
    else{
      res.send(lists);
    }
});
}
});

router.delete('/Delete', function(req, res) {
    if(req.body)
    {
      // let m1 = new ResModel(req.body);
       ResModel.remove({ Name: req.body.Name},
          function(err, lists)
       {
         if(err)
         {
           res.send(err);
         }
    else{
      res.send(lists);
    }
});
}
});

router.get('/', function(req, res) {
    if(req.body)
    {
      let m1 = new ResModel(req.body);
       m1.save(function(err)
       {
         if(err)
         {
           res.send(err);
         }
    else{
      res.send('restaurant values updated successfully');
    }
});
}
});

// router.post('/add', function(req, res) {
//     logger.debug("Inside user post");
//     let user = req.body;
//     res.send('user' +user);
// });
//
// router.get('/', function(req, res) {
//     res.send('Hello from Express');
// });

router.get('/view', function(req, res) {
  var name = req.body;
  if(Object.keys(name).length === 0)
  {
    res.send('no name');
  }
  else {
      res.json(name);
  }
console.log(name);
});


// Get details of all user in the system
router.put('/update', function(req, res) {
  let arr = req.body;
  if(req.body.id == null)
  {
    res.send('enter a valid id');
  }
  else{
    res.send(arr[1].id + ' is updated successfully in DB');
  }
  // console.log(arr[0].name);
  //  console.log(arr[1].id);
});

router.delete('/delete', function(req, res) {
  // console.log('Inside get');
  // console.log('Inside get'+req1);
 if(req.body.id == null)
 {
   res.send('enter a valid id');
 }
 else{
   res.send('deleted');
 }
});

module.exports = router;
