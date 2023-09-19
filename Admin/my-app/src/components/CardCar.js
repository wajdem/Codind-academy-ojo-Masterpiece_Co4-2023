import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardJop = () => {
  const [getAllCars, setGetAllCars] = useState([]);

  useEffect(() => {
    axios.get('/api/car/all-cars')
      .then(response => {
        setGetAllCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching car listings:', error);
      });
  }, []);
  
  const handleCardPress = (jobTitle) => {

  }

  return (
    <div className="container">
      {getAllCars.map((car, index) => (
        <div className="card" key={index} onClick={() => handleCardPress(car.company)}>
          <div className="cardContent">
            <h2 className="jobTitle">{car.company}</h2>
            <p className="description">{car.name}</p>
            <p className="description">{car.price}</p>
            <p className="description">{car.manufactureDate}</p>
            <p className="description">{car.engineCapacity}</p>
            <p className="description">{car.speed}</p>
            <p className="description">{car.fuelType}</p>
            <p className="description">{car.condition}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardJop;
