var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
//set up base route
router.get('/', function(req,res){
  //get all data
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data}); //render the index.handlebars
  })
})

router.put('/burgers/update',function(req,res){
  //update the table and redirect to base route
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');//redirect to "/" base route
  });
});
//create a new burger in DB
router.post('/burgers/create',function(req,res){
  // call the create method
  burger.create(req.body.burger_name, function(result){
    console.log(result);//console to log
    res.redirect('/');//redirect to base
  })
})
//need to exports routes from this file. cannot connect to browser otherwise
//this links both router.js & server.js files together
module.exports = router;