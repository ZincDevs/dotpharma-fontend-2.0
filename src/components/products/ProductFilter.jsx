/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import MedicineContext from '../../context/MedicineProvider';
import categories from '../../data/categories.json';

export default function ProductFilter() {
  const [activeFilter, setActiveFilter] = useState('Show all');
  const { setMedicineCont } = useContext(MedicineContext);
  const filters = [{
    text: 'Show all',
    active: (activeFilter === 'Show all'),
  },
  {
    text: 'Categories',
    active: (activeFilter === 'Categories'),
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
  const { medicines } = useSelector(state => state?.medicine);
  useEffect(() => {
    setMedicineCont(medicines);
  }, [medicines]);
  const filterMedicineFunction = () => {
    switch (activeFilter) {
      case 'Categories':
        setMedicineCont([]);
        break;
      case 'New Products':
        setMedicineCont(
          medicines?.filter(medicine => medicine?.m_tags?.includes('New products')),
        );
        break;
      case 'Promotion':
        setMedicineCont(
          medicines?.filter(medicine => medicine?.m_tags?.includes('Promotion')),
        );
        break;
      case 'Popular':
        setMedicineCont(
          medicines?.filter(medicine => medicine?.m_tags?.includes('Popular')),
        );
        break;
      default:
        setMedicineCont(medicines);
    }
  };
  useEffect(() => {
    filterMedicineFunction();
  }, [activeFilter]);
  return (
    <div className="product-filter">
      <div className="d-flex col-12">
        {filters.map(({ text, active }) => (
          <div key={text} onClick={() => setActiveFilter(text)} className={`px-3 py-3 p-filter-item col-2 d-flex justify-content-center align-items-center  ${active && 'active'}`}>
            {text === 'Categories' ? (
              <Dropdown>
                <Dropdown.Toggle className="dropdowntex" id="dropdown-basic">
                  {text}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map(category => (<Dropdown.Item href="#" key={category}>{category}</Dropdown.Item>))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <span>
                {text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
