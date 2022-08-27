/* eslint-disable react/prop-types */
import React from 'react';

export default function FormTextInput({ value, placeholder, onChange }) {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      className="input-control"
      value={value}
    />
  );
}
