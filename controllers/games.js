const Game = require('../models/Games');

const gameController = {
  // Create a new game
  createGame: async (req, res) => {
    const { name, height, weight, age, midical_condition, image } = req.body;
    const game = new Game({ name, height, weight, age, midical_condition, image });
    try {
      await game.save();
      res.status(201).send({ message: 'Game created successfully' });
    } catch (err) {
      res.status(400).send({ message: 'Error creating game', error: err });
    }
  },

  // Retrieve all games
  getGames: async (req, res) => {
    try {
      const games = await Game.find();
      res.send(games);
    } catch (err) {
      res.status(500).send({ message: 'Error retrieving games', error: err });
    }
  },

  // Retrieve a single game by ID
  getGameById: async (req, res) => {
    const id = req.params.id;
    try {
      const game = await Game.findById(id);
      if (!game) {
        res.status(404).send({ message: 'Game not found' });
      } else {
        res.json(game);
      }
    } catch (err) {
      res.status(500).send({ message: 'Error retrieving game', error: err });
    }
  },

  // Update a game
  updateGame: async (req, res) => {
    const id = req.params.id;
    const { name, height, weight, age, midical_condition, image } = req.body;
    try {
      const game = await Game.findByIdAndUpdate(id, { name, height, weight, age, midical_condition, image }, { new: true });
      res.send({ message: 'Game updated successfully' });
    } catch (err) {
      res.status(400).send({ message: 'Error updating game', error: err });
    }
  },

  // Delete a game
  deleteGame: async (req, res) => {
    const id = req.params.id;
    try {
      await Game.findByIdAndRemove(id);
      res.send({ message: 'Game deleted successfully' });
    } catch (err) {
      res.status(500).send({ message: 'Error deleting game', error: err });
    }
  }
};

module.exports = gameController;