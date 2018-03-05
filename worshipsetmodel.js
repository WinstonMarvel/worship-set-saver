const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/worshipsettool", function(error){
	if(error){
		throw error;
	}
	console.log("successs");
});	


var worshipsetSchema = mongoose.Schema({
	"name" : String,
	"created" : String,
	"location" : String
});

var Worshipset = mongoose.model("Worshipset", worshipsetSchema);


module.exports = Worshipset;