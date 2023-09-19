const express = require('express')

// controller functions
const { loginUser, signupUser, getAllUser, deleteUser } = require('../controllers/userControllers')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// Get all users
router.get('/all-user', getAllUser);

// delet users
router.delete('/delte-user/:id', deleteUser);



module.exports = router