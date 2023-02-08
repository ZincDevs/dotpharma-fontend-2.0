/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useContext } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import key from 'uniqid';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { ProductPlaceholder } from '../shared/Placeholder';
// import ProductItem, { ProductItemHor } from '../shared/ProductItem';
// import ProductItemHor from '../shared/ProductItemHor';
import { getMedicines, getMedicinesHor } from '../../app/features/medicine';
import MedicineContext from '../../context/MedicineProvider';

const ProductItem = React.lazy(() => import('../shared/ProductItem'));

export default function ProductList({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
}) {
  const dispatch = useDispatch();
  // const products = useSelector(state => state?.medicine?.medicines, shallowEqual);
  const { medicineCont } = useContext(MedicineContext);

  // const mProducts = products?.length > 2 ? [products[0], products[1]] : products;
  useEffect(() => { getMedicines({ limit: 8 }, dispatch); }, []);
  return (
    <div className="product-lis">
      <div className="d-flex flex-column">
        <div className="px-1">
          <div className="item-list d-flex col-12 flex-wrap">
            {_.map(medicineCont, product => (
              <div className="p-1" key={product.m_id}>
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
      <div className="div-empty" />
    </div>
  );
}
