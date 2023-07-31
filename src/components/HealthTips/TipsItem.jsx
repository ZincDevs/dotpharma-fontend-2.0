/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function TipsItem({ tip }) {
  return (
    <div className="qodef-e qodef-grid-item qodef-item--full new product type-product post-384 status-publish first instock product_cat-allergies product_tag-newest has-post-thumbnail shipping-taxable purchasable product-type-simple">
      <div className="qodef-woo-product-inner">
        <div className="qodef-woo-product-image">
          <img width="500" height="332" src={tip.h_image} className="attachment-full size-full" alt="a" loading="lazy" sizes="(max-width: 300px) 100vw, 200px" />
          <div className="qodef-woo-product-image-inner" />
        </div>
      </div>
    </div>
  );
}

export default TipsItem;
