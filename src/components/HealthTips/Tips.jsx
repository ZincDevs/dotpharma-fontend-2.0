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
import { ProductPlaceholder } from '../shared/Placeholder';
import TipsItem from './TipsItem';

export default function TipsList() {
  const hTips = useSelector(state => state.healthTips?.healthtips, shallowEqual);
  // const handleCloseAlert = () => {
  //   setShowAlert(false);
  // };

  return (
    <div className="qodef-content-grid flex flex-column pt-2" style={{ minHeight: '100%' }}>
      <div className="product-lis">
        <div className="d-flex flex-column">
          <div className="px-1">
            <div className="health-tips-grid">
              {_.map(hTips, tip => (
                <div className="p-1" key={key()}>
                  <Suspense fallback={<ProductPlaceholder />}>
                    <TipsItem
                      tip={tip}
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
