const express = require('express');
const router = express.Router();
const { UserRating } = require('../models/user_rating');
var bodyParser = require('body-parser');

router.post('/', (req, res, next) => {
	console.log(req.body.params)
	const ratingsCount = req.body.params.ratingsCount;

	let num;

	UserRating
	 .findOneAndUpdate(
		{id: req.body.params.id}, 
      	{ userRating: req.body.params.userRating,
        // averageRating: req.body.params.averageRating,
        $inc : { ratingsCount: 1 } },		
		{upsert: true, new: true}, 
		function(err, res){
          if (err) {
            console.log('got an error');
            res.status(500).json({ error:'Unable to modify record' }); 
          } else {
              console.log('Count has been recorded');
          }
		}),

	UserRating
   	  .findOne(
    	{id: req.body.params.id}, 
    	//{ var prevRating: averageRating },
    	function(err, obj){
          if (err) {
            console.log('got an error');
            res.status(500).json({ error:'Unable to modify record' }); 
          } else {
          	console.log(obj);
          	var num = obj.averageRating;
              console.log('Count has been recorded');
          }
    })
    .then( userRating => res.status(201).json( userRating.rate(num) ))
    //.then save averageRating here
    UserRating
    .update({id: req.body.params.id}, {$set: {averageRating: 3}})
    .catch( err => next(err) );
});

	// UserRating.findByIdAndUpdate(
	// 	{id: req.body.params.id}, 
	// 	{userRating: req.body.params.userRating},
	// 	{upsert: true},
	// 	),
	//   function(err) {
	//   	if (err) throw err;
	//   	else {
	//   		UserRating
	//   			.create({
	// 				userRating: req.body.params.userRating,
	// 				id: req.body.params.id,
	// 				averageRating: req.body.params.averageRating,
	// 				ratingsCount: req.body.params.ratingsCount,
	// 				})
	//   	}
	//   }

	// .then(userRating => 
	// 	res.status(201).json(userRating.rate() ))

	// .then(res.redirect('/'))
	// .then(res.send({averageRating: 3}))//this works but isnt' what i want
	// .then(res.send("Item saved to database"))
	// .catch(err => next(err))

//});


// router.post('/', (req, res) => {
// 	const toUpdate = {};
// 	const updateableFields = ['averageRating', 'ratingsCount', 'userRating'];

// 	updateableFields.forEach(field => {
// 		if (field in req.body.params) {
// 			toUpdate[field] = req.body[field];
// 		}
// 	});
// 	UserRating
// 		.findOneAndUpdate({
// 			id: req.body.params.id} ,
// 			{averageRating: req.body.params.averageRating,
// 			 $set: {toUpdate},
// 			 $inc: {ratingsCount: 1} },
// 			 {upsert: true, new: true}
// 		.exec()
// 		.then(userRating => 
// 			res.status(201).json(userRating.rate() ))
// 		.catch(err => next(err) )
// 		)
// 		});


module.exports = router;
