import React from 'react';
import ProductItem from '../shared/ProductItem';

export default function ProductList() {
  return (
    <div className="product-lis">
      <div className="d-flex flex-column">
        <div className="px-1">
          <div className="item-list d-flex col-12 flex-wrap">
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
            <div className="col-3 p-1">
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
