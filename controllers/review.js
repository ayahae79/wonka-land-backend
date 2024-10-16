const Reviews = require("../models/Reviews")
const Games = require("../models/Games")

const CreateComment = async (req, res) => {
  try {
    const { game, comment, rate, user } = req.body
    // console.log(gamesId)

    if (!comment || !rate) {
      return res.status(400).send("Comment and rating are required")
    }

    const newReview = new Reviews({
      game,
      comment,
      rate,
      user,
    })

    await newReview.save()

    await Games.findByIdAndUpdate(game, {
      $push: { comments: newReview._id },
    })

    return res
      .status(201)
      .json({ message: "Comment added successfully!", review: newReview })
  } catch (error) {
    console.log(error)
    return res.status(500).send("Error saving comment!")
  }
}

const DeleteComment = async (req, res) => {
  try {
    const commentId = req.params.id

    // Delete the comment
    await Reviews.findByIdAndDelete(commentId)

    // Optionally, remove the comment reference from the game
    await Games.findOneAndUpdate(
      { comments: commentId },
      { $pull: { comments: commentId } }
    )

    return res.status(200).send("Comment deleted successfully!")
  } catch (error) {
    console.log(error)
    return res.status(500).send("Error deleting comment.")
  }
}

module.exports = {
  CreateComment,
  DeleteComment,
}
