const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  name: {
    type: String,
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
  }, 
  img:{
    uri:String
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
