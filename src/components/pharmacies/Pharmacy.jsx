/* eslint-disable camelcase */
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
import { ToastContainer, toast } from 'react-toastify';
import { ProductPlaceholder } from '../shared/Placeholder';
import { addToCart, removeCart } from '../../api/index';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { getMyProfile } from '../../app/features/user';
import { getMedicinesHor } from '../../app/features/medicine';

const ProductItem = React.lazy(() => import('../shared/ProductItem'));

export default function Pharmacy() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pharmacies = useSelector(state => state?.medicine?.medicinesHor, shallowEqual);
  const axios = useAxiosPrivate();
  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const handleAddToCart = (m_id, changeStatus) => {
    // const m_id = e.target?.id;
    changeStatus('pending');
    addToCart(axios, m_id, err => {
      if (err) {
        changeStatus('fail');
        toast.error('Could not add to cart, please sign in first!');
      } else {
        setTimeout(() => {
          changeStatus('success');
          toast.success('Added to cart successfully!');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };
  // const handleCloseAlert = () => {
  //   setShowAlert(false);
  // };
  const handleRemoveFromCart = (e, changeStatus) => {
    const c_id = e.target?.id;
    changeStatus('pending');
    removeCart(axios, c_id, err => {
      if (err) {
        changeStatus('fail');
      } else {
        setTimeout(() => {
          changeStatus('success');
          toast.success('Removed from cart successfully!');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };
  useEffect(() => { getMedicinesHor({ limit: 2, page: 2 }, dispatch); }, []);
  return (
    <div className="qodef-content-grid flex flex-column pt-2" style={{ minHeight: '100%' }}>
      <ToastContainer />
      <div className="product-lis">
        <div className="d-flex flex-column">
          <div className="px-1">
            <div className="item-list d-flex flex-wrap">
              {_.map(pharmacies, product => (
                <div className="p-1" key={key()}>
                  <Suspense fallback={<ProductPlaceholder />}>
                    <ProductItem
                      handleAddToCart={handleAddToCart}
                      handleRemooveFromCart={handleRemoveFromCart}
                      productDetails={product}
                      profile={profile}
                    />
                  </Suspense>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
