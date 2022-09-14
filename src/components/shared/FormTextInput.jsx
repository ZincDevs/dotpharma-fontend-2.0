/* eslint-disable react/prop-types */
import React from 'react';

export default function FormTextInput({
  type = 'text', value, placeholder, onChange,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="input-control"
      value={value}
      required
    />
  );
}
