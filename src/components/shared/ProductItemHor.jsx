/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink, FloatingButton } from './Buttons';
import { ItemFotter, Price } from './Elements';

export default function ProductItemHor({
  productDetails: {
    m_price, m_discount, m_name, m_image, m_desciption,
  },
}) {
  return (
    <div className="product-item hor d-flex py-4">
      <div className="top col-5">
        <div className="disc">
          <FloatingButton link="/" text="-2%" icon="bi bi-bag" />
        </div>
        <img src={m_image} alt="item" />
      </div>
      <div className="down px-3 w-100">
        <div className="p-1">
          <h5>
            <Link to="/">
              {m_name}
            </Link>
          </h5>
        </div>
        <div>
          <p className="item-desc">{m_desciption}</p>
        </div>
        <div className="py-2">
          <Price discount={m_discount} price={m_price} />
        </div>
        <div className="py-2">
          <ButtonLink link="/" text="Add to cart" icon="bi bi-bag" />
        </div>
        <div className="py-1">
          <ItemFotter />
        </div>
      </div>
    </div>
  );
}
