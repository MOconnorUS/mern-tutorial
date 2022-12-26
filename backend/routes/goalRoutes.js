const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')
const { setGoals } = require('../controllers/goalController')
const { putGoals } = require('../controllers/goalController')
const { deleteGoals } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, putGoals)

module.exports = router