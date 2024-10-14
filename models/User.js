// Import mongoose
const mongoose = require("mongoose")

// Define the User schema
const userSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
)

// Create and export the User model
module.exports = mongoose.model("User", userSchema)
