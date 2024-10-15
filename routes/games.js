const express = require('express')
const router = express.Router()
const gameController = require('../controllers/games')

router.post('/games', gameController.createGame)
router.get('/games', gameController.getGames)
router.get('/games/:id', gameController.getGameById)
router.put('/games/:id', gameController.updateGame)
router.delete('/games/:id', gameController.deleteGame)

module.exports = router
