const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/' , checkAuth , dogsCtrl.create)
router.get('/' , checkAuth , dogsCtrl.index)
router.put('/:dogId' , dogsCtrl.update)
router.delete('/:dogId' , dogsCtrl.delete)

module.exports = router