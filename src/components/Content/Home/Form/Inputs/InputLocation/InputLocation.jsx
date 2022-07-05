import React from 'react';
import { ReactComponent as LocationLogo } from '../../../../../../img/icons/location.svg';

import './InputLocation.css';

const InputLocation = ({ setInputLocationHandler, inputLocationText }) => {
  return (
    <>
      <label htmlFor="country">
        <LocationLogo className="form-icon" />
        Location
      </label>
      <input
        onChange={setInputLocationHandler}
        value={inputLocationText}
        type="text"
        id="country"
        placeholder="Куда поедем?"
      />
    </>
  );
};

export default InputLocation;
