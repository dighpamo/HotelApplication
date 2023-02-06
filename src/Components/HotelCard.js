import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div>
      <img src={hotel.image} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <div>
        <span>Rating: {hotel.rating}</span>
        <span>Price: {hotel.price}</span>
      </div>
    </div>
  );
};

export default HotelCard;
