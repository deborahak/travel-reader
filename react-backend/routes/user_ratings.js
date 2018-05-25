var express = require('express');
var router = express.Router();
var books = require('google-books-search');
const { UserRating } = require('../models/user_rating');

router('/search_results')
// .post( (req, res, next) =>
	// UserRating.create(req.body)
	// 	.then(() res.redirect('/search_results'))
	// 	.catch(err => next(err))
//	);

module.exports = router;
