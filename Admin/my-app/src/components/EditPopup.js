import React, { useState } from "react";
import axios from "axios";

const UpdatePopup = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    company: car.company,
    name: car.name,
    price: car.price,
    manufactureDate: car.manufactureDate,
    engineCapacity: car.engineCapacity,
    speed: car.speed,
    fuelType: car.fuelType,
    condition: car.condition,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/car/patsh-cars/${car._id}`, formData);
      onClose();
    } catch (error) {
      console.error("Error updating car listing:", error);
    }
  };



  return (
    <div className="edit-popup">
        <div className="confirmation-message">
          Car has been added successfully!
        </div>
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <label>Company:</label>
          <input
            type="String"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
          <label>Name:</label>
          <input
            type="String"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>price:</label>
          <input
            type="Number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <label>Manufacture Date:</label>
          <input
            type="Number"
            name="manufactureDate"
            value={formData.manufactureDate}
            onChange={handleInputChange}
          />
          <label>Engine Capacity:</label>
          <input
            type="Number"
            name="engineCapacity"
            value={formData.engineCapacity}
            onChange={handleInputChange}
          />
          <label>Speed:</label>
          <input
            type="Number"
            name="speed"
            value={formData.speed}
            onChange={handleInputChange}
          />
          <label>Fuel Type:</label>
          <input
            type="String"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleInputChange}
          />
          <label>Condition:</label>
          <input
            type="String"
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
          />

          <div style={{ display: "flex", gap: "79px" }}>
            <button type="submit" className="button-student">
              Update Car
            </button>
            <button className="form_button_cancel" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePopup;
