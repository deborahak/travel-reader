var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var books = require('google-books-search');

const userRating = mongoose.Schema({
	_bookId: "0",
	userRating: "3",
});





module.exports = router;
