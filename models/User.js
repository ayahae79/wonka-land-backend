// Import mongoose
const mongoose = require("mongoose")

// Define the User schema
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
  },
  { timestamps: true }
)

// Create and export the User model
module.exports = mongoose.model("User", userSchema)
