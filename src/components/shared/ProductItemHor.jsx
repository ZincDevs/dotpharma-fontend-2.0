/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, FloatingButton } from './Buttons';
import { Price } from './Elements';

export default function ProductItemHor({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
  productDetails: {
    m_id, m_price, m_discount, m_name, m_image, m_desciption,
  },
}) {
  const [status, setStatus] = useState();
  const productBotton = useRef();
  // const cart = profile?.cart || [];
  // const cart_item = _.find(cart, item => item?.medicine?.m_id === m_id);
  const changeStatus = status => {
    setStatus(status);
  };
  return (
    <div className="product-item hor d-flex py-4">
      {/* <div className="top col-5">
        <div className="disc">
          <FloatingButton link="/" text="-2%" icon="bi bi-bag" />
        </div>
        <img src={m_image} alt="item" />
      </div> */}
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
          <Button id={m_id} handleOnclick={e => { handleAddToCart(m_id, changeStatus); }} text="Add to cart" icon="bi bi-bag" />
        </div>
        {/* <div className="py-1">
          <ItemFotter />
        </div> */}
      </div>
    </div>
  );
}
