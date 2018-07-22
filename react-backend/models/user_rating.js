'use strict';

const mongoose = require('mongoose');

const userRatingSchema = mongoose.Schema({
	id: String,
	userRating: Number,
	averageRating: Number, 
	ratingsCount: Number
});

userRatingSchema.methods.rate = function(num) {

// UserRating
//    .findByIdAndUpdate(
//     {id: req.body.params.id}, 
//     { var prevRating: averageRating },
//     console.log('hi'),
//     function(err, res){
//           if (err) {
//             console.log('got an error');
//             res.status(500).json({ error:'Unable to modify record' }); 
//           } else {
//               console.log('Count has been recorded');
//           }
//     })

  var prevRating = num;
  var ratingsCount = this.ratingsCount;
  var userRating = this.userRating;
  var newRating = ((prevRating * ratingsCount) + userRating) / (ratingsCount);
  console.log( newRating.toFixed() + ' is the new rate');
  console.log(ratingsCount);
  return {
  	averageRating: newRating
    //ratingsCount: ratingsCount + 1
  }
  averageRating.save();
}

const UserRating = mongoose.model('UserRating', userRatingSchema);

module.exports = {UserRating};
