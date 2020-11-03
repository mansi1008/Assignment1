/*
	Name: Mansi Mehindru
	Student ID: 301108725
	Date: 2020-10-26
*/

var port=process.env.PORT || 8080;
var express = require('express');
var app = express();

//Routes are in seperate index.js file, which also has all the logic for the app
var router=require('./routes/router.js');
app.set('view engine', 'ejs');


app.use("/",router);
app.use("/public", express.static(__dirname + '/public'));
app.listen(port);
console.log('Server started at :'+port);

module.exports=app