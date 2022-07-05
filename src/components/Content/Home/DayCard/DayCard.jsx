import React from 'react';
import './DayCard.css'

const DayCard = ({ country, checkin, checkout }) => {
  return (
    <div className="card-wrapper">
      <ul className="day-card">
        <li className="country">Страна: {country}</li>
        <li className="checkin">Дата приезда: {checkin}</li>
        <li className="checkout">Дата отъезда: {checkout}</li>
      </ul>
    </div>
  );
};

export default DayCard;
