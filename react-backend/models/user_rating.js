const mongoose = require('mongoose');
//var routes = require('./routes');

const userRatingSchema = mongoose.Schema({
	id: String,
	userRating: Number,
	averageRating: Number, 
	ratingsCount: Number
});

userRatingSchema.methods.rate = function newRating(num) {
  var prevRating = {averageRating};
  var ratingsCount = {ratingsCount};
  var userRating = num;
  var n = ((prevRating * ratingsCount) + userRating) / (ratingsCount + 1);
  console.log(n + ' is the new rate');
  // return this.save n;  
};

module.exports = mongoose.model('UserRating', userRatingSchema)
