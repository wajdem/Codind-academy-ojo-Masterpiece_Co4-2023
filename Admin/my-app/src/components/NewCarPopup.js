import React, { useState } from "react";
import axios from "axios";

const NewCarPopup = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [manufactureDate, setManufactureDate] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [speed, setSpeed] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [condition, setCondition] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [carAdded, setCarAdded] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/car/new-cars", {
        company,
        name,
        price,
        manufactureDate,
        engineCapacity,
        speed,
        fuelType,
        condition,
      });
      console.log("API call successful:", response.data);
      setCarAdded(true); // Set the carAdded state to true
    } catch (error) {
      console.error("Error creating car listing:", error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="edit-popup">
      {carAdded ? (
        <div className="confirmation-message">
          Car has been added successfully!
        </div>
      ) : (
        <div className="popup-content">
          <label>Company:</label>
          <input
            type="String"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <label>Name:</label>
          <input
            type="String"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Price:</label>
          <input
            type="Number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Manufacture Date:</label>
          <input
            type="date"
            value={manufactureDate}
            onChange={(e) => setManufactureDate(e.target.value)}
          />
          <label>Engine Capacity:</label>
          <input
            type="Number"
            value={engineCapacity}
            onChange={(e) => setEngineCapacity(e.target.value)}
          />
          <label>Speed:</label>
          <input
            type="Number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <label>Fuel Type:</label>
          <input
            type="String"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          />
          <label>Condition:</label>
          <input
            type="String"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <div style={{ display: "flex", gap: "79px" }}>
            <button className="button-student" onClick={handleSubmit}>
              New Car
            </button>
            <button className="form_button_cancel" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCarPopup;
