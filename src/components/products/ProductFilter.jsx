/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import key from 'uniqid';

export default function ProductFilter({ handleOnClick }) {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const filters = [{
    text: 'Show all',
    active: (activeFilter === 'Show All'),
  }, {
    text: 'Gift Packaging',
    active: (activeFilter === 'Gift Packaging'),
  }, {
    text: 'New Products',
    active: (activeFilter === 'New Products'),
  }, {
    text: 'Promotion',
    active: activeFilter === 'Promotion',
  }, {
    text: 'Popular',
    active: (activeFilter === 'Popular'),
  },
  {
    text: 'Recommendation',
    active: (activeFilter === 'Recommendation'),
  }];
  return (
    <div className="product-filter">
      <div className="d-flex col-12">
        {filters.map(({ text, active }) => (
          <div key={key()} onClick={handleOnClick} className={`px-3 py-3 p-filter-item col-2 d-flex justify-content-center align-items-center  ${active && 'active'}`}>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
