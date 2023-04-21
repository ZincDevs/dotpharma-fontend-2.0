/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import ClinicItem from './ClinicItem';
import {
  cardiology_b, internal_medecine_b, radiology_b, ophthalmology_b, stomatology_b,
} from '../../assets';
import { getClinics } from '../../app/features/clinic';

export default function ClinicList() {
  const dispatch = useDispatch();
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const clinics = useSelector(state => state.clinic.clinics, shallowEqual);
  const availableClinics = [{ title: 'All', key: 'all' }, { title: 'Ophthalmology', key: 'eyes', icon: ophthalmology_b }, { title: 'Cardiology', key: 'cardiology', icon: cardiology_b }, { title: 'Stomatology', key: 'stomatology', icon: stomatology_b }, { title: 'Radiology', key: 'radiology', icon: radiology_b }, { title: 'Internal Medicine', key: 'internal_medicine', icon: internal_medecine_b }];
  useEffect(() => {
    getClinics(dispatch);
  }, []);
  useEffect(() => {
    setFilteredClinics(clinics);
  }, [clinics]);
  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredClinics(clinics);
      return;
    }
    setFilteredClinics(clinics?.filter(clinic => clinic.specialized.toLowerCase() === currentFilter.toLowerCase()));
  }, [currentFilter]);
  return (
    <div className="qodef-content-grid flex flex-column" style={{ minHeight: '100%' }}>
      <ToastContainer />
      <div className="qodef-shortcode qodef-m qodef-woo-shortcode qodef-woo-product-list qodef-item-layout--info-right qodef-content-increased--no qodef-grid qodef-layout--columns qodef-gutter--small qodef-col-num--2 qodef-item-layout--info-right qodef-filter--on qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--2 qodef-col-num--1366--2 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1">
        <div className="flex py-3 mb-1 flex-wrap" style={{ borderRadius: '30px' }}>
          {
            availableClinics.map((clinic, index) => (
              <span
                key={clinic.key}
                className="py-2 px-4 text-white font-weight-normal button d-flex flex-column align-items-center justify-content-center gap-3 border"
                style={{
                  backgroundColor: `${clinic.key === currentFilter ? '#207cc6' : 'white'}`,
                  cursor: 'pointer',
                  borderTopLeftRadius: `${index === 0 ? '7px' : ''}`,
                  borderBottomLeftRadius: `${index === 0 ? '7px' : ''}`,
                  borderTopRightRadius: `${index + 1 === availableClinics.length ? '7px' : ''}`,
                  borderBottomRightRadius: `${index + 1 === availableClinics.length ? '7px' : ''}`,
                }}
                onClick={() => setCurrentFilter(clinic.key)}
              >
                {
                  clinic?.icon && (
                  <img
                    src={clinic.icon}
                    alt={clinic.title}
                    style={{
                      width: '45px',
                      maxHeight: '45px',
                      objectFit: 'contain',
                      filter: `${clinic.key === currentFilter ? 'brightness(0) invert(1)' : ''}`,
                      WebkitFilter: `${clinic.key === currentFilter ? 'brightness(0) invert(1)' : ''}`,
                    }}
                  />
                  )
                }
                <span style={{ color: `${clinic.key === currentFilter ? 'white' : '#207cc6'}` }}>
                  {clinic.title}
                </span>
              </span>
            ))
          }
        </div>
        <div className="qodef-grid-inner clear">
          {filteredClinics?.map((clinic, index) => (
            <ClinicItem
              clinic={clinic}
              key={index}
            />
          ))}
          {!filteredClinics?.length && <p className="mx-2 text-danger">These clinics are not available yet! </p>}
        </div>
      </div>
    </div>
  );
}
