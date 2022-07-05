import React from 'react';
import Button from '@mui/material/Button';
import { ReactComponent as LocationLogo } from '../../../../img/icons/location.svg';
import { ReactComponent as CalendarLogo } from '../../../../img/icons/calendar.svg';
import './Form.css';

const Form = ({
  setInputCountryText,
  inputCountryText,
  setInputArrivalDate,
  inputArrivalDate,
  setInputDepartureDate,
  inputDepartureDate,
  dayActions,
  setDayActions
}) => {
  const setInputCountryHandler = e => {
    setInputCountryText(e.target.value);
  };
  const setInputArrivalDateHandler = e => {
    setInputArrivalDate(e.target.value);
  };
  const setInputDepartureDateHandler = e => {
    setInputDepartureDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setInputCountryText('');
    setInputArrivalDate('');
    setInputDepartureDate('');

    let dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    setDayActions([
      ...dayActions,
      {
        country: inputCountryText,
        checkin: new Date(inputArrivalDate).toLocaleDateString('ru-RU', dateOptions), //Тут писать логику отображения даты ?
        checkout: inputDepartureDate,
        id: Math.random() * 1000
      }
    ]);
  };

  return (
    <form className="form">
      <ul className="field-wrapper">
        <li>
          <label htmlFor="country">
            <LocationLogo className="form-icon" />
            Location
          </label>
          <input
            onChange={setInputCountryHandler}
            value={inputCountryText}
            type="text"
            id="country"
            placeholder="Куда поедем?"
          />
        </li>
        <li>
          <label htmlFor="checkin">
            <CalendarLogo className="form-icon" />
            Checkin
          </label>
          <input
            onChange={setInputArrivalDateHandler}
            value={inputArrivalDate}
            className="checkin-input"
            type="date"
            id="checkin"
            placeholder="Дата приезда"
          />
        </li>
        <li>
          <label htmlFor="checkout">
            <CalendarLogo className="form-icon" />
            Checkout
          </label>
          <input
            onChange={setInputDepartureDateHandler}
            value={inputDepartureDate}
            className="checkout-input"
            type="date"
            id="checkout"
            placeholder="Дата отъезда"
          />
        </li>
        <li className="form-btn">
          <Button
            onClick={submitHandler}
            type="submit"
            variant="contained"
            style={{ background: '#19C28B' }}
          >
            +Add
          </Button>
        </li>
      </ul>
    </form>
  );
};

export default Form;
