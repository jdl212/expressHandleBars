// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================
var app = express();
// public directory as /public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
// use the method override to override the calling method with parameter _method as we have used methods like GET POST PUT
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout: 'main'}));//default layout is main.handlebars

app.set('view engine', 'handlebars');//set the view engine to handlebars

var routes = require('./controllers/routes.js') //controller of the application where all the URL and respective actions are defined.
app.use('/',routes);

// Starts the server to begin listening
// =============================================================
var port = 3000;
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});