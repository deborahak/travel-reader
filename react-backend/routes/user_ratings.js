var express = require('express');
var router = express.Router();
const { UserRating } = require('../models/user_rating');

router.post('/', function(req, res) {
	UserRating.create({
		userRating: req.body.userRating,
		id: req.body.id,
		averageRating: req.body.averageRating,
		ratingsCount: req.body.ratingsCount,
	})
	// .then(userRating => res.status(201).json)

	// .then(res.redirect('/'))
	.then(res.send("Item saved to database"))
	.catch(err => next(err))
})

module.exports = router;
