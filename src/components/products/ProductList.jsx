/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {
  Suspense, useEffect, useContext, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import key from 'uniqid';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { ProductPlaceholder } from '../shared/Placeholder';
// import ProductItem, { ProductItemHor } from '../shared/ProductItem';
// import ProductItemHor from '../shared/ProductItemHor';
import { getMedicines, getMedicinesHor } from '../../app/features/medicine';
import MedicineContext from '../../context/MedicineProvider';
import Pagination from '../shared/Pagination';

const ProductItem = React.lazy(() => import('../shared/ProductItem'));

export default function ProductList({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
}) {
  const dispatch = useDispatch();
  // const products = useSelector(state => state?.medicine?.medicines, shallowEqual);
  const { medicineCont } = useContext(MedicineContext);
  const [page, setPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => { getMedicines({ limit: itemsPerPage, page }, dispatch); }, []);
  const handlePageClick = event => {
    setPage(Number(event.selected) + 1);
    getMedicines({ limit: itemsPerPage, page }, dispatch);
  };
  console.log('Medicine cont=====', medicineCont);
  return (
    <div className="product-lis">
      <div className="d-flex flex-column">
        <div className="px-1">
          <div className="item-list d-flex col-12 flex-wrap">
            {_.map(medicineCont?.medicines, product => (
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
          <Pagination
            handlePageClick={handlePageClick}
            totalRows={medicineCont?.count || 1}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
      <div className="div-empty" />
    </div>
  );
}
