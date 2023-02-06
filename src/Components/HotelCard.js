import React from 'react';
import '../css/HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
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
