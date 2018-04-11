var express = require('express');
var router = express.Router();
var books = require('google-books-search');
var MY_API_KEY = 'AIzaSyA2KfbaezO-UMr_YpPPm7rf9jRJ2RIcqLM';


router.get('/', function(req, res, next) {

	var options = {
	    key: MY_API_KEY,
	    field: 'title',
	    offset: 0,
	    limit: 12,
	    type: 'books',
	    order: 'relevance',
	    lang: 'en'
	};

	var bookresult = books.search('mystery Paris', function(error, results) {
	    if ( ! error ) {
	        console.log(results);
  			// res.render('booksearch', { 
  			// 	title: results[0].title,
  			// 	author: results[0].authors

	        res.send(results);
	    } else {
	        console.log(error);
	    }
	});
});

module.exports = router;
