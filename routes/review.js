const express = require('express')
const router = express.Router()
const commentCtrl = require('../controllers/review')
router.post('/add', commentCtrl.CreateComment)
router.get('/detail', commentCtrl.GetComments)
router.post('/delete/:id', commentCtrl.DeleteComment)

module.exports = router
