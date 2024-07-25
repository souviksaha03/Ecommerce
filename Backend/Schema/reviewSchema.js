const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name of reviewer is required.']
  },
  rating: {
    type: Number,
    required: [true, 'Give rating in range of 1-5']
  },
  comment: {
    type: String,
    required: [true, 'Please leave your thoughts.']
  },
  reviewedAt: {
    type: Date,
    default: Date.now
  }
})

const Review = mongoose.model('Review', reviewSchema)
// export { Review, reviewSchema }
module.exports = Review
module.exports = reviewSchema