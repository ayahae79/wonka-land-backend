// Import mongoose
const mongoose = require("mongoose")

// Define the Review schema
const reviewSchema = mongoose.Schema(
  {
    comment: String,
    rating: Number,
    game: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
)

// Create and export the Review model
module.exports = mongoose.model("Review", reviewSchema)
