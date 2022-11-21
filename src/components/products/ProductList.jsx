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
import { getMedicines, getMedicinesHor } from '../../app/features/medicine';

const ProductItem = React.lazy(() => import('../shared/ProductItem'));
const ProductItemHor = React.lazy(() => import('../shared/ProductItemHor'));

export function ProductListHor({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state?.medicine?.medicinesHor, shallowEqual);
  // products;
  useEffect(() => { getMedicinesHor({ limit: 2, page: 2 }, dispatch); }, []);
  return (
    <div className="d-flex flex-column">
      <div className="px-1">
        <div className="item-list d-flex col-12 flex-wrap">
          {_.map(products, product => (
            <div className="p-1 col-12" key={key()}>
              <Suspense fallback={<ProductPlaceholder />}>
                <ProductItemHor
                  handleAddToCart={handleAddToCart}
                  handleRemooveFromCart={handleRemoveFromCart}
                  productDetails={product}
                  profile={profile}
                />
              </Suspense>
            </div>
          ))}
          {/* <div className="p-1">
            <ProductItemHor
              handleAddToCart={handleAddToCart}
              handleRemooveFromCart={handleRemoveFromCart}
              productDetails={{  }}
            />
          </div>
          <div className="p-1">
            <ProductItemHor />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default function ProductList({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state?.medicine?.medicines, shallowEqual);

  // const mProducts = products?.length > 2 ? [products[0], products[1]] : products;
  useEffect(() => { getMedicines({ limit: 8 }, dispatch); }, []);
  return (
    <div className="product-lis">
      <div className="d-flex flex-column">
        <div className="px-1">
          <div className="item-list d-flex col-12 flex-wrap">
            {_.map(products, product => (
              <div className="col-3 p-1" key={product.m_id}>
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
  );
}
