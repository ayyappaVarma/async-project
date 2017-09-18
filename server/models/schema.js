var mongoose=require("mongoose");
var config = require('./../config/config.js');
mongoose.connect(config.mongo.url);
var schema = mongoose.Schema;

var studentSchema= new schema({
	name:String,
	age:Number,
	location:String
});

var teacherSchema= new schema({
	name:String,
	age:Number,
	location:String
});

var studentColl = mongoose.model("students",studentSchema);
var teacherColl = mongoose.model("teachers",teacherSchema);

module.exports={
	students: studentColl,
	teachers: teacherColl

};