/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import key from 'uniqid';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { ProductPlaceholder } from '../shared/Placeholder';
// import ProductItem, { ProductItemHor } from '../shared/ProductItem';
// import ProductItemHor from '../shared/ProductItemHor';
import {
  pharmacist,
  internal_medecine_b,
  radiology_b,
  nutritionist,
  genecologist,
} from '../../assets';
import { getDoctors } from '../../app/features/doctors';
import DoctorItem from './DoctorItem';

const ProductItem = React.lazy(() => import('../shared/ProductItem'));
const ProductItemHor = React.lazy(() => import('../shared/ProductItemHor'));

export default function Doctors({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctors = useSelector(state => state?.doctor?.doctors, shallowEqual);
  const [currentFilter, setCurrentFilter] = useState('all');
  const availableClinics = [
    { title: 'All', key: 'All' },
    {
      title: 'Pharmacist',
      key: 'Pharmacist',
      icon: pharmacist,
    },
    {
      title: 'Gynecologist&Obstetrician',
      key: 'Gynecologist&Obstetrician',
      icon: genecologist,
    },
    { title: 'Nutritionist', key: 'Nutritionist', icon: nutritionist },
    // { title: 'psychologist', key: 'psychologist', icon: radiology_b },
    // {
    //   title: 'Therapist',
    //   key: 'Therapist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Counselor',
    //   key: 'Counselor',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'ife coach',
    //   key: 'ife coach',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Internist',
    //   key: 'Internist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Dermatologist',
    //   key: 'Dermatologist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Cardiologist',
    //   key: 'Cardiologist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Ophtalmologist',
    //   key: 'Ophtalmologist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Neurologist',
    //   key: 'Neurologist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Pediatrician',
    //   key: 'Pediatrician',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Neurologist',
    //   key: 'Neurologist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'ENT specialist',
    //   key: 'ENT specialist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Dentist',
    //   key: 'Dentist',
    //   icon: internal_medecine_b,
    // },
    // {
    //   title: 'Urologist',
    //   key: 'Urologist',
    //   icon: internal_medecine_b,
    // },
  ];
  useEffect(() => {
    getDoctors({ limit: 8 }, dispatch);
  }, []);

  return (
    <div
      className="qodef-content-grid flex flex-column pt-2"
      style={{ minHeight: '100%' }}
    >
      <div
        className="flex py-3 mb-1 flex-wrap"
        style={{ borderRadius: '30px' }}
      >
        {availableClinics.map((clinic, index) => (
          <span
            key={clinic.key}
            className="py-2 px-4 text-white font-weight-normal button d-flex flex-column align-items-center justify-content-center gap-3 border"
            style={{
              backgroundColor: `${
                clinic.key === currentFilter ? '#207cc6' : 'white'
              }`,
              cursor: 'pointer',
              borderTopLeftRadius: `${index === 0 ? '7px' : ''}`,
              borderBottomLeftRadius: `${index === 0 ? '7px' : ''}`,
              borderTopRightRadius: `${
                index + 1 === availableClinics.length ? '7px' : ''
              }`,
              borderBottomRightRadius: `${
                index + 1 === availableClinics.length ? '7px' : ''
              }`,
            }}
            onClick={() => setCurrentFilter(clinic.key)}
          >
            {clinic?.icon && (
              <img
                src={clinic.icon}
                alt={clinic.title}
                style={{
                  width: '45px',
                  maxHeight: '45px',
                  objectFit: 'contain',
                  filter: `${
                    clinic.key === currentFilter
                      ? 'brightness(0) invert(1)'
                      : ''
                  }`,
                  WebkitFilter: `${
                    clinic.key === currentFilter
                      ? 'brightness(0) invert(1)'
                      : ''
                  }`,
                }}
              />
            )}
            <span
              style={{
                color: `${
                  clinic.key === 'currentFilter' ? 'white' : '#207cc6'
                }`,
              }}
            >
              {clinic.title}
            </span>
          </span>
        ))}
      </div>
      <div className="qodef-shortcode qodef-m qodef-woo-shortcode qodef-woo-product-list qodef-item-layout--info-right qodef-content-increased--no qodef-grid qodef-layout--columns qodef-gutter--small qodef-col-num--2 qodef-item-layout--info-right qodef-filter--on qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--2 qodef-col-num--1366--2 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1">
        <div className="qodef-grid-inner clear">
          {doctors?.map(doctor => (
            <DoctorItem doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
