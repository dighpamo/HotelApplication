import React from "react";

const Confirmation = ({ hotelName, checkInDate, checkOutDate, guests }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Hotel Name: {hotelName}</p>
      <p>Check-In Date: {checkInDate}</p>
      <p>Check-Out Date: {checkOutDate}</p>
      <p>Number of Guests: {guests}</p>
      <button>Confirm Booking</button>
    </div>
  );
};

export default Confirmation;
