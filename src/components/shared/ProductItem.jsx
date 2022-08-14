/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink, FloatingButton } from './Buttons';
import { ItemFotter, Price } from './Elements';

export default function ProductItem({
  productDetails: {
    m_price, m_discount, m_name, m_image,
  },
}) {
  return (
    <div className="product-item">
      <div className="top">
        {m_discount && (
        <div className="disc">
          <FloatingButton link="/" text="-2%" icon="bi bi-bag" />
        </div>
        )}
        <img src={m_image} alt="item" />
      </div>
      <div className="down p-2">
        <div className="p-1">
          <h5 className="text-center">
            <Link to="/" className="text-center">
              {m_name}
            </Link>
          </h5>
        </div>
        <div className="py-2">
          <Price discount={m_discount} price={m_price} center />
        </div>
        <div className="py-2 d-flex justify-content-center align-items-center">
          <ButtonLink link="/" text="Add to cart" icon="bi bi-bag" />
        </div>
        <div className="py-1 d-flex justify-content-center align-items-center">
          <ItemFotter />
        </div>
      </div>
    </div>
  );
}
