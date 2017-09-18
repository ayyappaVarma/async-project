var express =require("express");
var router =express.Router()


var getSeries = require('../modules/async-series.js');
var getParallel = require('../modules/async-parallel.js');


router.get('/series', function(req, res) {
	getSeries(function(result) {
		res.json(result);
	});
});

router.get('/parallel', function(req, res) {
	getParallel(function(result) {
		res.json(result);
	});
});
module.exports=router;