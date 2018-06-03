var express = require('express');
var router = express.Router();
const { UserRating } = require('../models/user_rating');

router.post('/', function(req, res) {
	UserRating.create({
		userRating: req.body.params.userRating,//add params
		id: req.body.params.id,
		averageRating: req.body.params.averageRating,
		ratingsCount: req.body.params.ratingsCount,
	})
	.then(userRating => res.status(201).json(userRating.rate() ))

	// .then(res.redirect('/'))
	// .then(res.send({averageRating: 3}))//this works but isnt' what i want
	// .then(res.send("Item saved to database"))
	.catch(err => next(err))
})

module.exports = router;
