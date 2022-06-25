import React from 'react';
import './Form.css';

const Form = ({
  setInputCountryText,
  inputCountryText,
  inputCityText,
  setInputCityText,
  dayActions,
  setDayActions
}) => {
  const setInputCountryHandler = e => {
    setInputCountryText(e.target.value);
  };

  const setInputCityHandler = e => { //ВОПРОС ДУБЛИРОВАНИЯ
    setInputCityText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setInputCountryText('');
    setInputCityText(''); //ВОПРОС ДУБЛИРОВАНИЯ
    setDayActions([
      ...dayActions,
      { country: inputCountryText },
      { city: inputCityText }
    ]);
  };

  return (
    <form className="form">
      <input
        onChange={setInputCountryHandler}
        value={inputCountryText}
        type="text"
        placeholder="Страна"
      />
      <input
        onChange={setInputCityHandler}
        value={inputCityText}
        type="text"
        placeholder="Город"
      />
      <input type="text" placeholder="Дата приезда" />
      <input type="text" placeholder="Дата отъезда" />
      <button onClick={submitHandler} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
