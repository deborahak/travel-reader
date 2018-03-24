var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "Piper"
  }, {
  	id: 2,
  	username: "Elizabeth"
  }, {
  	id: 3,
  	username: "Ulysses"
  }]);

});

module.exports = router;
