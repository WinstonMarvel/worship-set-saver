const express = require("express");
const router = express.Router();

const Worshipset = require("./worshipsetmodel.js");





router.route("/worshipset")

.get(function(req,res){ //Lists all sets currently present
	Worshipset.find(function(err, set){
		if(err)
			res.send(err);

		res.json(set);
	}); 
})

.post(function(req,res){ //Creates a New set list
	console.log(req.body);
	Worshipset.create(req.body, function(err, set){
		if(err)
			console.log(err);
		res.send("success");
	});
});



router.route("/worshipset/:id") 

.put(function(req,res){
	console.log(req.body);
	Worshipset.findByIdAndUpdate( req.params.id , req.body , function(err, set){
		if(err)
			console.log(err);
		res.send("success");
	});
})

.delete(function(req,res){ //Deletes an existing list
	Worshipset.remove( { _id : req.params.id}, function(err, set){
		if (err)
			console.log(err);
		res.send("success");
	});
	console.log("deleteing " + req.params.id);

});



module.exports = router;