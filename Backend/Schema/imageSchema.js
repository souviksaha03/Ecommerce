const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  public_id: {
    type: String,
    required: [true, 'The public id to distinguish image.']
  },
  URL: {
    type: String,
    required: [true, 'Need url to fetch the image.']
  }
})

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
module.exports = imageSchema