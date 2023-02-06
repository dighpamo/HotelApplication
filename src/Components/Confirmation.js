import React from "react";
import '../css/Confirmation.css';


const Confirmation = ({ hotelName, checkInDate, checkOutDate, guests }) => {
  return (
    <div className="confirmation">
      <h2 className="confirmation-title">Confirmation</h2>
      <div className="confirmation-details">
        <div>
          <h3>Hotel Name:</h3>
          <p>{hotelName}</p>
        </div>
        <div>
          <h3>Check-In Date:</h3>
          <p>{checkInDate}</p>
        </div>
        <div>
          <h3>Check-Out Date:</h3>
          <p>{checkOutDate}</p>
        </div>
        <div>
          <h3>Number of Guests:</h3>
          <p>{guests}</p>
        </div>
      </div>
      <button className="confirmation-button">Confirm Booking</button>
    </div>
  );
};

export default Confirmation;
