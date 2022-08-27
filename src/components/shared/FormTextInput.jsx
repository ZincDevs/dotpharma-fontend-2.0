/* eslint-disable react/prop-types */
import React from 'react';

export default function FormTextInput({ type, placeholder, onChange }) {
  return (
    <div>
      <input type={type} onChange={onChange} placeholder={placeholder} className="input-control" />
    </div>
  );
}
