import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import Button from '@mui/material/Button';
import './CreateTripForm.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as CalendarLogo } from '../../../../img/icons/calendar.svg';

import InputLocation from './Inputs/InputLocation/InputLocation';

registerLocale('ru', ru);
setDefaultLocale('ru');

const Form = ({
  setInputLocationText,
  inputLocationText,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  dayActions,
  setDayActions
}) => {
  const setInputLocationHandler = e => {
    setInputLocationText(e.target.value);
  };
  const setInputArrivalDateHandler = e => {
    setStartDate(e.target.value);
  };
  const setInputDepartureDateHandler = e => {
    setEndDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setInputLocationText('');
    setStartDate('');
    setEndDate('');

    let dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    setDayActions([
      ...dayActions,
      {
        country: inputLocationText,
        checkin: new Date(startDate).toLocaleDateString(
          'ru-RU',
          dateOptions
        ), //Тут писать логику отображения даты ?
        checkout: new Date(endDate).toLocaleDateString(
          'ru-RU',
          dateOptions
        ),
        id: Math.random() * 1000
      }
    ]);
  };

  return (
    <form className="form">
      <div className="field-wrapper">
        <div className="field-container">
          <InputLocation
            setInputLocationHandler={setInputLocationHandler}
            inputLocationText={inputLocationText}
          />
        </div>
        <div className="field-container">
          <label htmlFor="checkin">
            <CalendarLogo className="form-icon" />
            Checkin
          </label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            calendarClassName="rasta-stripes"
            locale="ru"
            placeholderText="Дата приезда"
          />
        </div>
        <div className="field-container">
          <label htmlFor="checkout">
            <CalendarLogo className="form-icon" />
            Checkout
          </label>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale="ru"
            placeholderText="Дата отъезда"
          />
        </div>

        <div className="form-btn full-width">
          <Button
            onClick={submitHandler}
            type="submit"
            variant="contained"
          >
            +Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
