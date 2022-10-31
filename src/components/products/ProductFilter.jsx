/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import key from 'uniqid';
import Dropdown from 'react-bootstrap/Dropdown';
import categories from '../../data/categories.json';

export default function ProductFilter({ handleOnClick }) {
  const [activeFilter, setActiveFilter] = useState('Show All');
  const filters = [{
    text: 'Show all',
    active: (activeFilter === 'Show All'),
  },
  {
    text: 'Categories',
    active: (activeFilter === 'Gift Packaging'),
  },
  {
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
    text: 'More',
    active: (activeFilter === 'More'),
  },
  ];

  return (
    <div className="product-filter">
      <div className="d-flex col-12">
        {filters.map(({ text, active }) => (
          <div key={key()} onClick={handleOnClick} className={`px-3 py-3 p-filter-item col-2 d-flex justify-content-center align-items-center  ${active && 'active'}`}>
            {text === 'Categories' ? (
              <Dropdown>
                <Dropdown.Toggle className="dropdowntex" id="dropdown-basic">
                  {text}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map(category => (<Dropdown.Item href="#/">{category}</Dropdown.Item>))}

                  {/* <Dropdown.Item href="#/">Malaria</Dropdown.Item>
                  <Dropdown.Item href="#/">Cancer</Dropdown.Item>
                  <Dropdown.Item href="#/">Stomac diseases</Dropdown.Item>
                  <Dropdown.Item href="#/">Diabetic</Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            ) : <span>{text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
