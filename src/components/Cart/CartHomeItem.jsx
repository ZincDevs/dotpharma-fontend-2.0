/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function CartHomeItem({ item, handleTotalPrice }) {
  const price = item?.medicine?.m_price;
  const discount = item?.medicine?.m_discount;
  const discountPrice = (discount * price) / 100;
  const finalPrice = (!discount || discount === 0) ? price : price - discountPrice;
  // handleTotalPrice(finalPrice);
  return (
    <tr className="woocommerce-cart-form__cart-item cart_item">

      <td className="product-remove">
        <a
          href="https://pharmacare.qodeinteractive.com/cart/?remove_item=daea32adcae6abcb548134fa98f139f9&amp;_wpnonce=b0b79b91ee"
          className="remove"
          aria-label="Remove this item"
          data-product_id="5575"
          data-product_sku="089"
        >
          X

        </a>
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
            <span
              className="woocommerce-Price-currencySymbol"
            >
              RWF
            </span>
            {item?.medicine?.m_price}
          </bdi>

        </span>
      </td>

      <td className="product-quantity" data-title="Quantity">
        <span className="qodef-quantity-label">Quantity</span>
        <div className="qodef-quantity-buttons quantity">
          <label className="screen-reader-text" htmlFor="quantity_631a397b80b73">
            Cetirizine 45mg Film-coated
            Tablets quantity

          </label>
          <span className="qodef-quantity-minus" />
          <input
            type="text"
            id="quantity_631a397b80b73"
            className="input-text qty text qodef-quantity-input"
            data-step="1"
            data-min="0"
            data-max=""
            name="cart[daea32adcae6abcb548134fa98f139f9][qty]"
            value="1"
            title="Qty"
            size="4"
            placeholder=""
            inputMode="numeric"
          />
          <span className="qodef-quantity-plus" />
        </div>
      </td>

      <td className="product-subtotal" data-title="Subtotal">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            <span
              className="woocommerce-Price-currencySymbol"
            >
              $
            </span>
            25.00
          </bdi>

        </span>
      </td>
    </tr>
  );
}
