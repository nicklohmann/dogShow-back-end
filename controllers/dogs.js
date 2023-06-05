const { Dog } = require('../models')

async function index(req, res) {
  try {
    const dogs = await Dog.findAll()
    res.json(dogs)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
module.exports = { index , }