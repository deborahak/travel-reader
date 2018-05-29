const mongoose = require('mongoose');

const userRatingSchema = mongoose.Schema({
	id: String,
	userRating: Number,
	averageRating: Number, 
	ratingsCount: Number
});

userRatingSchema.methods.rate = function() {
  var prevRating = this.averageRating;
  var ratingsCount = this.ratingsCount;
  var userRating = this.userRating;
  var newRating = ((prevRating * ratingsCount) + userRating) / (ratingsCount + 1);
  console.log( {averageRating} + ' is the new rate');
  return {
  	averageRating: newRating
  }
}

const UserRating = mongoose.model('UserRating', userRatingSchema);

module.exports = {UserRating};
