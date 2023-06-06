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
    const dog = await Dog.findByPk(req.params.dogId)
    dog.set(req.body)
    await dog.save()
    res.status(200).json(dog)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function deleteDog(req, res) {
  try {
    const numberOfRowsRemoved = await Dog.destroy(
      { where: { id: req.params.dogId } }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { index , create, update, delete: deleteDog }