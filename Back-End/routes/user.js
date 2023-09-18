const express = require('express')

// controller functions
const { loginUser, signupUser, getAllUser } = require('../controllers/userControllers')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// Get all users
router.get('/all-user', getAllUser);


module.exports = router