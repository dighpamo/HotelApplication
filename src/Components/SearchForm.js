import React, { useState } from 'react';
import "../css/SearchForm.css";

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search for hotels using the provided values
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="check-in-date">Check-in Date:</label>
        <input
          type="date"
          id="check-in-date"
          value={checkInDate}
          onChange={(event) => setCheckInDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="check-out-date">Check-out Date:</label>
        <input
          type="date"
          id="check-out-date"
          value={checkOutDate}
          onChange={(event) => setCheckOutDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
