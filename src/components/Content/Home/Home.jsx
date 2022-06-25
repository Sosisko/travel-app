import React, { useState } from 'react';
import DaysCardsList from './DaysCardsList/DaysCardsList';

import Form from './Form/Form';
import './Home.css';

// import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const Home = () => {
  const [inputCountryText, setInputCountryText] = useState('');
  const [inputCityText, setInputCityText] = useState('');
  const [inputArrivalDate, setInputArrivalDate] = useState('');
  const [inputDepartureDate, setInputDepartureDate] = useState('');

  const [dayActions, setDayActions] = useState([]);

  return (
    <div className="home_wrapper">
      {/* <div className="append_trip">{<SpeedDialIcon/>}</div> */}
      <h2>Add trip</h2>
      <Form
        inputCountryText={inputCountryText}
        setInputCountryText={setInputCountryText}
        inputCityText={inputCityText}
        setInputCityText={setInputCityText}
        inputArrivalDate={inputArrivalDate}
        setInputArrivalDate={setInputArrivalDate}
        inputDepartureDate={inputDepartureDate}
        setInputDepartureDate={setInputDepartureDate}
        dayActions={dayActions}
        setDayActions={setDayActions}
      />

      <DaysCardsList dayActions={dayActions} />
    </div>
  );
};
export default Home;
