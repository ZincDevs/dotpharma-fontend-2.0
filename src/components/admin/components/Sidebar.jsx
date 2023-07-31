/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [currentLink, setCurrentLink] = useState(0);
  const links = [
    {
      name: 'Home',
      iconName:
        'fa-solid fa-home',

    },
    {
      name: 'Medicines',
      iconName:
      'fa-solid fa-prescription-bottle-medical',

    },
    {
      name: 'Pharmacies',
      iconName:
      'fa-solid fa-house-chimney-medical',

    }, {
      name: 'Clinics',
      iconName:
      'fa-solid fa-circle-h',

    }, {
      name: 'Doctors',
      iconName:
      'fa-solid fa-user-doctor',

    }, {
      name: 'Appointments',
      iconName:
      'fa-solid fa-calendar',

    },
    {
      name: 'Orders',
      iconName:
      'fa-solid fa-cart-shopping',

    },
    {
      name: 'Healthtips',
      iconName:
      'fa fa-lightbulb-o',
    },
  ];

  useEffect(() => {
    links.map((link, index) => {
      if (window.location.href.includes(link.name.toLowerCase())) setCurrentLink(index);
    });
  }, []);
  return (
    <div>
      {' '}
      <div className="adminx-sidebar expand-hover push">
        <ul className="sidebar-nav">
          {
            links.map(({ name, iconName }, index) => (
              <li className="sidebar-nav-item" key={index} onClick={() => setCurrentLink(index)}>
                <Link to={name.toLowerCase()} className={`sidebar-nav-link ${currentLink === index && 'active'} `}>
                  <span className="sidebar-nav-icon">
                    <i className={iconName} />
                  </span>
                  <span className="sidebar-nav-name">{name}</span>
                  <span className="sidebar-nav-end" />
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
