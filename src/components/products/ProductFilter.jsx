/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import MedicineContext from '../../context/MedicineProvider';
import categories from '../../data/categories.json';

export default function ProductFilter() {
  const [activeFilter, setActiveFilter] = useState('Show all');
  const { setMedicineCont } = useContext(MedicineContext);
  const [dropText, setDropText] = useState('Categories');
  const filters = [{
    text: 'Show all',
  },
  {
    text: 'Categories',
  },
  {
    text: 'New Products',
  }, {
    text: 'Promotion',
  }, {
    text: 'Popular',
  },
  {
    text: 'More',
  },
  ];
  const medicines = useSelector(state => state?.medicine?.medicines);
  useEffect(() => {
    setMedicineCont(medicines);
  }, [medicines]);

  const filterMedicineFunction = () => {
    let meds = [];
    switch (activeFilter) {
      case 'Categories':
        if (dropText === 'Categories') break;
        meds = medicines?.medicines?.filter(medicine => medicine?.m_type === dropText);
        setMedicineCont(
          { medicines: meds, status: 'success', count: medicines?.count }
          ,
        );
        break;
      case 'New Products':
        meds = medicines?.medicines?.filter(medicine => medicine?.m_tags && _.includes(medicine?.m_tags, 'New products'));

        setMedicineCont(
          { medicines: meds, status: 'success', count: medicines?.count },
        );
        break;
      case 'Promotion':
        meds = medicines?.medicines?.filter(medicine => medicine?.m_tags && _.includes(medicine?.m_tags, 'Promotion'));
        setMedicineCont(
          { medicines: meds, status: 'success', count: medicines?.count },
        );
        break;
      case 'Popular':
        meds = medicines?.medicines?.filter(medicine => medicine?.m_tags && _.includes(medicine?.m_tags, 'Popular'));
        setMedicineCont(
          { medicines: meds, status: 'success', count: medicines?.count },
        );
        break;
      default:
        setMedicineCont(medicines);
    }
  };
  useEffect(() => {
    filterMedicineFunction();
  }, [activeFilter, dropText]);
  return (
    <div className="product-filter">
      <div className="d-md-flex col-12">
        {filters.map(({ text }) => (
          <div
            key={text}
            onClick={() => {
              if (text === 'Show all') {
                setDropText('Categories');
              }
              setActiveFilter(text);
            }}
            className={`px-3 py-3 p-filter-item col-sm-2 d-flex justify-content-center align-items-center  ${text === activeFilter && 'active'}`}
          >
            {text === 'Categories' ? (
              <Dropdown>
                <Dropdown.Toggle className="dropdowntex" id="dropdown-basic">
                  {dropText}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map(category => (<Dropdown.Item href="#" key={category} onClick={() => setDropText(category)}>{category}</Dropdown.Item>))}
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
