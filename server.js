var express =require("express");
var router = require('./server/routes/async-router.js');
var app =express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));



app.use('/api',router); 

app.listen(4040);