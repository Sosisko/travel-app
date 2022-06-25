import React from 'react';
import DayCard from '../DayCard/DayCard';

const DaysCardsList = ({ dayActions }) => {
  return (
    <>
      {dayActions.map(day => (
        <DayCard key={day.id} country={day.country} checkin={day.checkin} checkout={day.checkout}/>
      ))}
    </>
  );
};

export default DaysCardsList;
