var express = require('express');
var router = express.Router();
var books = require('google-books-search');
// var MY_API_KEY = 'AIzaSyA2KfbaezO-UMr_YpPPm7rf9jRJ2RIcqLM';
var MY_API_KEY = '';

// var queryParams = {
// 	categories: 'Mystery',
// 	city: 'Rome',
// 	country: 'Italy'
// };

router.get('/', function(req, res, next) {
	// res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	// next();

	// req = `${queryParams.categories} in ${queryParams.city} by ${queryParams.notes}`;
	req = `${req.query.categories} in ${req.query.city} ${req.query.country}`;
	console.log(req);

	var options = {
	    key: MY_API_KEY,
	    field: 'title',
	    offset: 0,
	    limit: 12,
	    type: 'books',
	    order: 'relevance',
	    lang: 'en',
	    subject: 'Mystery'
	};

	var book_results = books.search(req, options, function(error, results, apiResponse) {
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

router.post('/', function(req, res) {

});

module.exports = router;
