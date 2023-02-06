import React, { useState } from 'react';
import '../css/BookingForm.css';


const BookingForm = ({ hotel, onSubmit }) => {
  const [guestName, setGuestName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ guestName, arrivalDate, departureDate });
  };

 return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>{hotel.name}</h3>
      <div>
        <label htmlFor="guest-name" className="booking-form__label">Guest Name:</label>
        <input
          type="text"
          id="guest-name"
          className="booking-form__input"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="arrival-date" className="booking-form__label">Arrival Date:</label>
        <input
          type="date"
          id="arrival-date"
          className="booking-form__input"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="departure-date" className="booking-form__label">Departure Date:</label>
        <input
          type="date"
          id="departure-date"
          className="booking-form__input"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <button type="submit" className="booking-form__submit">Book</button>
    </form>
  );
};

export default BookingForm;
