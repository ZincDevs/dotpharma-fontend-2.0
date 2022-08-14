import React from 'react';
import ProductFilter from './ProductFilter';
import ProductList, { ProductListHor } from './ProductList';

export function ProductsHomeHor() {
  return (
    <div className="product-home">
      <div className="container d-flex col-12">
        <div className="col-4 adf-2 p-1">
          <div className="content p-3 d-flex justify-content-center align-items-center">
            <div><h4>Ads</h4></div>
          </div>
        </div>
        <div className="col-8">
          <ProductListHor />
        </div>
      </div>
    </div>
  );
}

export default function ProductsHome() {
  return (
    <div className="product-home">
      <div className="container d-flex flex-column">
        <div className="py-4"><ProductFilter /></div>
        <div><ProductList /></div>
      </div>
    </div>
  );
}
