import React, { useState } from "react";
import NewCarPopup from "./NewCarPopup"; // Corrected import statement

const Buttons = () => {
  const [showCarPopup, setShowCarPopup] = useState(false);

  const handleNewJopClick = () => {
    setShowCarPopup(true);
  };

  const handleClosePopup = () => {
    setShowCarPopup(false);
  };

  const handleAllUserClick = () => {
    const carTable2Element = document.querySelector(".car_tabel2");
    carTable2Element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="four_buttons">
      <button className="button-student" onClick={handleNewJopClick}>
        New Car
      </button>
      {showCarPopup && <NewCarPopup onClose={handleClosePopup} />}
      <button className="all_user" onClick={handleAllUserClick}>
        All User
      </button>
    </div>
  );
};

export default Buttons;
