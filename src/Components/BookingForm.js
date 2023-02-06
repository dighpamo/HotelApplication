import React, { useState } from 'react';

const BookingForm = ({ hotel, onSubmit }) => {
  const [guestName, setGuestName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ guestName, arrivalDate, departureDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{hotel.name}</h3>
      <div>
        <label htmlFor="guest-name">Guest Name:</label>
        <input
          type="text"
          id="guest-name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="arrival-date">Arrival Date:</label>
        <input
          type="date"
          id="arrival-date"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="departure-date">Departure Date:</label>
        <input
          type="date"
          id="departure-date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
