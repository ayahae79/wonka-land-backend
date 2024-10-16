const express = require("express")
const router = express.Router()
const commentCtrl = require("../controllers/review")
router.post("/add", commentCtrl.CreateComment)
router.delete("/delete/:id", commentCtrl.DeleteComment)

module.exports = router
