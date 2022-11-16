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
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import ClinicItem from './ClinicItem';

import { getClinics } from '../../app/features/clinic';

export default function ClinicList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const clinics = useSelector(state => state.clinic.clinics, shallowEqual);
  const availableClinics = [{ title: 'All', key: 'all' }, { title: 'Eye Specialists', key: 'eyes' }, { title: 'Surgery Specialists', key: 'surgery' }, { title: 'Skin Specialists', key: 'skin' }, { title: 'Teeth Specialists', key: 'teeth' }, { title: 'Fracture Specailists', key: 'fracture' }];
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
    setFilteredClinics(clinics?.filter(clinic => clinic.specialized === currentFilter));
  }, [currentFilter]);
  return (
    <div className="qodef-content-grid flex flex-column" style={{ minHeight: '100%' }}>
      <ToastContainer />
      <div className="qodef-shortcode qodef-m qodef-woo-shortcode qodef-woo-product-list qodef-item-layout--info-right qodef-content-increased--no qodef-grid qodef-layout--columns qodef-gutter--small qodef-col-num--2 qodef-item-layout--info-right qodef-filter--on qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--2 qodef-col-num--1366--2 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1">
        <div className="flex gap-2 py-3 mb-1 flex-wrap">
          {
            availableClinics.map(clinic => (
              <span
                key={clinic.key}
                className="py-2 px-4 text-white font-weight-normal"
                style={{ backgroundColor: `${clinic.key === currentFilter ? 'rgba(65, 157, 90,0.8)' : '#207cc6'}`, cursor: 'pointer' }}
                onClick={() => setCurrentFilter(clinic.key)}
              >
                {clinic.title}
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
