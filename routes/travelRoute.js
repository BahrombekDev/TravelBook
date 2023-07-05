const {Router} = require('express')
const router = Router()
const {
    getAllTravels,
    getTravelById,
    addTravelBook,
    removeTravelBook,
    updateTravelBook
} = require('../controllers/travelControllers')

router.get('/', getAllTravels)
router.post('/add',addTravelBook)
router.get('/:id', getTravelById)
router.delete('/:id', removeTravelBook)
router.put('/:id', updateTravelBook)


module.exports = router
