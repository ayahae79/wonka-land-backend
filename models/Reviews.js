// Import mongoose
const mongoose = require("mongoose")

// Define the Review schema
const reviewSchema = mongoose.Schema(
  {
    comment: String,
    rate: { type: Number, min: 1, max: 10 },
    game: { type: mongoose.Schema.Types.ObjectId, ref: "Games" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
)

// Create and export the Review model
module.exports = mongoose.model("Reviews", reviewSchema)
