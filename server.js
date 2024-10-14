// Import necessary packages
const express = require("express")
const path = require("path")
require("dotenv").config()

// Initialize express app
const app = express()

// Set the port from environment variables or default to 4000
const PORT = process.env.PORT
// Middleware to handle URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }))

// Middleware to parse incoming JSON requests
app.use(express.json())

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")))

// Database configuration (import the db connection file)
const db = require("./config/db")

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Wonka Land!")
})

// Mount additional routes
// e.g., app.use("/api/games", require("./routes/gameRoutes"));

// Listen for HTTP requests on the specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
