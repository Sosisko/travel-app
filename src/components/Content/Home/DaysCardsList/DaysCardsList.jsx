import React from 'react';
import DayCard from '../DayCard/DayCard';

const DaysCardsList = ({ dayActions }) => {
  return (
    <>
      {dayActions.map(day => (
        <DayCard country={day.country} city={day.city}/>
      ))}
    </>
  );
};

export default DaysCardsList;
