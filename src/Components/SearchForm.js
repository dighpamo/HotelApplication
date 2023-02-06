import React, { useState } from 'react';

const SearchForm = () => {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null
  });
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);

  const handleDatesChange = (startDate, endDate) => {
    setDates({ startDate, endDate });
  };

  const handleLocationChange = location => {
    setLocation(location);
  };

  const handleGuestsChange = guests => {
    setGuests(guests);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => handleLocationChange(e.target.value)}
      />
      <input type="number" value={guests} onChange={e => handleGuestsChange(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
