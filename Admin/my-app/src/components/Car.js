// JobListPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdatePopup from "./EditPopup";

const JobListPage = () => {
  const [Car, setCar] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [getAllUser, setGetAllUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/car/all-cars");
        setCar(response.data);
      } catch (error) {
        console.error("Error fetching car listings:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/car/delete-cars/${id}`);
      setCar((prevListings) => prevListings.filter((Car) => Car._id !== id));
    } catch (error) {
      console.error("Error deleting Car listing:", error);
    }
  };

  const handleUpdate = (Car) => {
    setSelectedCar(Car);
  };

  const handleCloseUpdatePopup = () => {
    setSelectedCar(null);
  };

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const response = await axios.get("/api/user/all-user");
        setGetAllUser(response.data);
      } catch (error) {
        console.error("Error fetching All user:", error);
      }
    };

    fetchAllUser();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`/api/user/delte-user/${userId}`);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  return (
    <>
      <h1>All Cars</h1>
      <div className="car_tabel1">
        <table>
          <thead>
            <tr>
              <th>company</th>
              <th>name</th>
              <th>price</th>
              <th>manufactureDate</th>
              <th>engineCapacity</th>
              <th>speed</th>
              <th>fuelType</th>
              <th>condition</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {Car.map((Car) => (
              <tr key={Car._id}>
                <td>{Car.company}</td>
                <td>{Car.name}</td>
                <td>{Car.price}</td>
                <td>{Car.manufactureDate}</td>
                <td>{Car.engineCapacity}</td>
                <td>{Car.speed}</td>
                <td>{Car.fuelType}</td>
                <td>{Car.condition}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => handleDelete(Car._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="button" onClick={() => handleUpdate(Car)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedCar && (
          <UpdatePopup car={selectedCar} onClose={handleCloseUpdatePopup} />
        )}
      </div>

      <h1>All User</h1>
      <div className="car_tabel2">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {getAllUser.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                <button
                  className="button"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobListPage;
