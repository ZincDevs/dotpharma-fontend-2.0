/* eslint-disable react/prop-types */
import React from 'react';

export default function FormFileInput({
  placeholder, onChange,
}) {
  return (
    <input
      type="file"
      onChange={onChange}
      placeholder={placeholder}
      className="input-control"
    />
  );
}
