/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import key from 'uniqid';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { ProductPlaceholder } from '../shared/Placeholder';
// import ProductItem, { ProductItemHor } from '../shared/ProductItem';
// import ProductItemHor from '../shared/ProductItemHor';
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

  useEffect(() => { getDoctors({ limit: 8 }, dispatch); }, []);

  return (
    <div className="qodef-content-grid flex flex-column pt-2" style={{ minHeight: '100%' }}>
      <div className="qodef-shortcode qodef-m qodef-woo-shortcode qodef-woo-product-list qodef-item-layout--info-right qodef-content-increased--no qodef-grid qodef-layout--columns qodef-gutter--small qodef-col-num--2 qodef-item-layout--info-right qodef-filter--on qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--2 qodef-col-num--1366--2 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1">
        <div className="qodef-grid-inner clear">
          {doctors?.map(doctor => (<DoctorItem doctor={doctor} />))}
        </div>
      </div>
    </div>
  );
}
