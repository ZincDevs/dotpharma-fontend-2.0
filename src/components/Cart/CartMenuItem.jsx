/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function CartMenuItem({ item }) {
  const medecineinfo = item?.medicine;
  const name = medecineinfo?.m_name;
  const image = medecineinfo?.m_image;
  const price = medecineinfo?.m_price;
  return (
    <div className="qodef-woo-dropdown-item qodef-e">
      <div className="qodef-e-image">
        <Link
          to="/cart"
        >
          <img
            src={image}
            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
            alt="a"
            sizes="(max-width: 600px) 100vw, 600px"
            width="600"
            height="461"
          />

        </Link>
      </div>
      <div className="qodef-e-content">
        <p itemProp="name" className="qodef-e-title entry-title">
          <Link
            to="/cart"
          >
            {name}
          </Link>
        </p>
        <p className="qodef-e-price">
          <span className="woocommerce-Price-amount amount">
            <bdi>
              {price}
              <span
                className="woocommerce-Price-currencySymbol"
                style={{ marginLeft: '5px' }}
              >
                RWF
              </span>
            </bdi>
          </span>

        </p>
      </div>
    </div>
  );
}
