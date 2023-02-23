/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { removeCartById, updateCart } from '../../api';
import { setMyProfile } from '../../app/features/user/_userSlice';

export default function CartHomeItem({ item, handleTotalPrice, handleChange }) {
  const price = item?.medicine?.m_price;
  const user = useSelector(state => state?.user?.MyProfile);
  const discount = item?.medicine?.m_discount;
  const [quantity, setQuantity] = useState(item.c_quantity);
  const axios = useAxiosPrivate();
  const dispatch = useDispatch();
  const quatityHandler = e => {
    if (parseInt(e.target.value, 10)) {
      setQuantity(parseInt(e.target.value, 10));
      item.c_quantity = parseInt(e.target.value, 10);
      updateCart(axios, item?.c_id, parseInt(e.target.value, 10), (err, data) => {
        if (err) {
          console.log('Hellllo error', err);
        } else {
          console.log('Hellllo success', data);
        }
      });
    }
  };
  const removeFromCart = () => {
    removeCartById(axios, item?.c_id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const updatedUser = {
          ...user, cart: user?.cart?.filter(cartItem => cartItem.c_id !== item?.c_id),
        };
        dispatch(setMyProfile({ user: { user: { ...updatedUser } } }));
      }
    });
  };
  return (
    <tr className="woocommerce-cart-form__cart-item cart_item">
      <td className="product-remove">
        <i className="fa-solid fa-close text-white bg-danger mr-4 p-1 px-2" style={{ cursor: 'pointer', borderRadius: '2px' }} onClick={removeFromCart} />
      </td>

      <td className="justift-content-center align-items-center">
        <img
          src={item?.medicine?.m_image}
          alt="a"
          loading="lazy"
          style={{ width: '40px' }}
        />
      </td>

      <td className="product-name" data-title="Product">
        {item?.medicine?.m_name}
      </td>

      <td className="product-price" data-title="Price">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            <span className="woocommerce-Price-currencySymbol">RWF</span>
            {item?.medicine?.m_price}
          </bdi>
        </span>
      </td>

      <td className="product-quantity" data-title="Quantity">
        <span className="qodef-quantity-label">Quantity</span>
        <div className="qodef-quantity-buttons quantity">
          <input
            type="number"
            id="quantity_631a397b80b73"
            className="input-text"
            data-step="1"
            data-min="0"
            data-max=""
            name="cart[daea32adcae6abcb548134fa98f139f9][qty]"
            value={quantity}
            title="Qty"
            size="4"
            onChange={quatityHandler}
            placeholder=""
          />
        </div>
      </td>

      <td className="product-subtotal" data-title="Subtotal">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            <span className="woocommerce-Price-currencySymbol">RWF</span>
            {Number(item?.medicine?.m_price) * item.c_quantity}
          </bdi>
        </span>
      </td>
    </tr>
  );
}
