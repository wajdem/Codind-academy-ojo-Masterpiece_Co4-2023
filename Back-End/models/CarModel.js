const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  manufactureDate: {
    type: Date,
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
    // enum: ['Gasoline', 'Diesel', 'Electric', 'Hybrid'],
    required: true
  },
  condition: {
    type: String,
    // enum: ['New', 'Used'],
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
