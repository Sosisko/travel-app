import React from 'react';

const DayCard = ({ country, city }) => {
  return (
    <div className="card-wrapper">
      <ul>
        <li className="country">{country}</li>
        <li className="city">{city}</li>
      </ul>
    </div>
  );
};

export default DayCard;
