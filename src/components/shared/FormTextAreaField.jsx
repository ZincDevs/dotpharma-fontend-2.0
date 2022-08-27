/* eslint-disable react/prop-types */
import React from 'react';

export default function FormTextAreaInput({ value, placeholder, onChange }) {
  return (
    <textarea
      type="text"
      onChange={onChange}
      className="input-control"
      value={value}
      required
    >
      {placeholder}
    </textarea>
  );
}
