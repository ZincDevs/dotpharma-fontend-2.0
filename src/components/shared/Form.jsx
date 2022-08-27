/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ controls }) {
  return (
    <form>
      {controls.map(data => {
        const { label, Control } = data;
        return (
          <div>
            <label htmlFor="firstname">{label}</label>
            <Control />
          </div>
        );
      })}
    </form>
  );
}

Form.prototype = {
  controls: PropTypes.array,
};
