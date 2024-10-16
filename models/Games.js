// Import mongoose
const mongoose = require('mongoose')

// Define the Game schema
const gameSchema = mongoose.Schema(
  {
    name: String,
    height: String,
    weight: String,
    age: String,
    midical_condition: String,
    image: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }]
  },
  { timestamps: true }
)

// Create and export the Game model
module.exports = mongoose.model('Game', gameSchema)
