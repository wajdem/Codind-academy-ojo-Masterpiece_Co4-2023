const express = require('express');
const router = express.Router();
const carController = require('../controllers/CarController');

// Create a new car
router.post('/new-cars', carController.createNewCar);

// Get all cars
router.get('/all-cars', carController.getAllCars);

router.get('/all-cars/:id', carController.getCarById);


// Update a car
router.patch('/patsh-cars/:id', carController.updateCar);

// Delete a car
router.delete('/delete-cars/:id', carController.deleteCar);

module.exports = router;
