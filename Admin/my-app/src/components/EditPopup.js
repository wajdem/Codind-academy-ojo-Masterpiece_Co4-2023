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
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <input
            type="String"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
          />
          <input
            type="String"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="Number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <input
            type="Number"
            name="manufactureDate"
            placeholder="Manufacture Date"
            value={formData.manufactureDate}
            onChange={handleInputChange}
          />
          <input
            type="Number"
            name="engineCapacity"
            placeholder="Engine Capacity"
            value={formData.engineCapacity}
            onChange={handleInputChange}
          />
          <input
            type="Number"
            name="speed"
            placeholder="Speed"
            value={formData.speed}
            onChange={handleInputChange}
          />
          <input
            type="String"
            name="fuelType"
            placeholder="Fuel Type"
            value={formData.fuelType}
            onChange={handleInputChange}
          />
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
