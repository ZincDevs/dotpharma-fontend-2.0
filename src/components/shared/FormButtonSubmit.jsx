/* eslint-disable react/prop-types */
import React from 'react';

export default function FormButtonSubmit({ onSubmit, onClick, value }) {
  return (
    <input
      type="submit"
      className="button-submit"
      value={value}
      onSubmit={onSubmit}
      onClick={onClick}
    />
  );
}
