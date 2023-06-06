const { json } = require('sequelize')
const { Vote, Dog } = require('../models')

async function castVote(req, res) {
  try {
		req.body.voterId = req.user.profile.id
    
  const prevVote = await Vote.findOne({
    where: {
      voterId: req.body.voterId,
      dogId: req.body.dogId,
      }
    })
    if (prevVote) {
      prevVote.value = req.body.value
      await prevVote.save()
    } else {
      await Vote.create(req.body)
    }

    const dog = Dog.findByPk(
      req.body.dogId,
      { include: [{ model: Vote, as: "votesCounted"}]}
    )
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  castVote
}
