const Game = require("../models/Games")

const gameController = {
  // Create a new game
  createGame: async (req, res) => {
    const { name, height, weight, age, midical_condition, image } = req.body
    const game = new Game({
      name,
      height,
      weight,
      age,
      midical_condition,
      image,
    })

    try {
      await game.save()
      res.status(201).send({ message: "Game created successfully" })
    } catch (err) {
      res.status(400).send({ message: "Error creating game", error: err })
    }
  },

  // Retrieve all games
  getGames: async (req, res) => {
    try {
      const games = await Game.find()
      res.send(games)
    } catch (err) {
      res.status(500).send({ message: "Error retrieving games", error: err })
    }
  },

  // Retrieve a single game by ID
  getGameById: async (req, res) => {
    const id = req.params.id
    try {
      const game = await Game.findById(id)
      if (!game) {
        res.status(404).send({ message: "Game not found" })
      } else {
        res.json(game)
      }
    } catch (err) {
      res.status(500).send({ message: "Error retrieving game", error: err })
    }
  },

  // Update a game
  updateGame: async (req, res) => {
    const id = req.params.id
    const { name, height, weight, age, midical_condition, image } = req.body
    try {
      const game = await Game.findByIdAndUpdate(
        id,
        { name, height, weight, age, midical_condition, image },
        { new: true }
      )
      res.send({ message: "Game updated successfully" })
    } catch (err) {
      res.status(400).send({ message: "Error updating game", error: err })
    }
  },

  // Delete a game
  deleteGame: async (req, res) => {
    const id = req.params.id
    try {
      const response = await axios.delete(`${BASE_URL}/game/games/${gameId}`)
      if (response.status === 200) {
        // Update the state to remove the deleted game
        setGames((prevGames) => prevGames.filter((game) => game._id !== gameId))
        console.log("Game deleted successfully:", gameId)
      }
    } catch (error) {
      console.error(
        "Failed to delete the game:",
        error.response ? error.response.data : error.message
      )
    }
  },
  getCommentsByGameId: async (req, res) => {
    const gameId = req.params.id

    try {
      const game = await Game.findById(gameId).populate("comments")
      if (!game) {
        return res.status(404).send({ message: "Game not found" })
      }

      res.send({ comments: game.comments })
    } catch (err) {
      res.status(500).send({ message: "Error retrieving comments", error: err })
    }
  },
}

module.exports = gameController
