var express =require("express");
var router = require('./server/routes/async-router.js');
var app =express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false

}));
var config = require('./server/config/config.js');
app.use(express.static('client', {index: 'views/index.html'}));
var router=require('./server/routes/async-router.js');
app.use('/api',router); 

app.listen(config.port,function(){
	console.log("connected to server");
});