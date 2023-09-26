const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    // required: true
  },
  cloudinary_id: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    // required: true
  },
  price: {
    type: Number,
    required: true
  },
  manufactureDate: {
    type: Number,
    required: true
  },
  engineCapacity: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true
  },
  fuelType: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
