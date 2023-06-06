const { Dog } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch {
    console.log(err)
    res.status(500).json({ err })
  }
}

async function index(req, res) {
  try {
    const dogs = await Dog.findAll()
    res.json(dogs)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function update(req, res) {
  try {
    const dog = await Dog.update(
      req.body,
      { where: { id: req.parans.dogId }, returning: true}
    )
    res.status(200).json(dog)
  } catch (err) {
    res.status(500).json(err)
  }
}



module.exports = { index , create, update }