import React, { useState } from 'react';
import DaysCardsList from './DaysCardsList/DaysCardsList';

import CreateTripForm from './Form/CreateTripForm';
import './Home.css';

// import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const Home = () => {
  const [inputLocationText, setInputLocationText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [dayActions, setDayActions] = useState([]);

  return (
    <div className="home_wrapper">
      {/* <div className="append_trip">{<SpeedDialIcon/>}</div> */}
      <h2>Add trip</h2>
      <CreateTripForm
        className="form"
        inputLocationText={inputLocationText}
        setInputLocationText={setInputLocationText}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        dayActions={dayActions}
        setDayActions={setDayActions}
      />

      <DaysCardsList dayActions={dayActions} />
    </div>
  );
};
export default Home;
