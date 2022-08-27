/* eslint-disable react/prop-types */
import React from 'react';

export default function FormSelectInput({
  placeholder, onChange, options,
}) {
  return (
    <div>
      <select placeholder={placeholder} className="input-control" onChange={onChange}>
        {options.map(option => (<option value={option}>{option}</option>))}
      </select>
    </div>
  );
}
