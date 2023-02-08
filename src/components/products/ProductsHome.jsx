/* eslint-disable react/prop-types */
import React from 'react';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

export default function ProductsHome({
  handleAddToCart,
  handleRemoveFromCart,
}) {
  return (
    <div className="product-home">
      <div className="container d-flex flex-column">
        <div className="py-4"><ProductFilter /></div>
        <div>
          <ProductList
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />

        </div>
      </div>
    </div>
  );
}
