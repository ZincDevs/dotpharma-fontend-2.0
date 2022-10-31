/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function ClinicItem({ clinic }) {
  /*
  c_email: "info@pharmacieconseil.org"
c_id: "f0910cb3-5921-49c7-bf37-56484eef07c3"
c_logo: "https://www.pharmacieconseil.org/img/131.png"
c_name: "PHARMACIE CONSEIL"
c_phonenumber: "+(250) 788381219"
  */
  return (
    <div className="qodef-e qodef-grid-item qodef-item--full new product type-product post-384 status-publish first instock product_cat-allergies product_tag-newest has-post-thumbnail shipping-taxable purchasable product-type-simple">
      <div className="qodef-woo-product-inner">
        <div className="qodef-woo-product-image">
          <img width="450" height="600" src={clinic.c_logo} className="attachment-full size-full" alt="a" loading="lazy" sizes="(max-width: 450px) 100vw, 450px" />
          <div className="qodef-woo-product-image-inner" />
        </div>
        <div className="qodef-woo-product-content">
          {' '}
          <h5 itemProp="name" className="qodef-woo-product-title entry-title">
            <a itemProp="url" className="qodef-woo-product-title-link" href="#">
              {clinic.c_name}
            </a>
          </h5>
          {' '}
          <div className="qodef-woo-product-price price">
            <span className="woocommerce-Price-amount amount">
              {clinic.ph_address}
            </span>
          </div>
          <div className="qodef-woo-yith-buttons-inner">
            <a href="#" className="button yith-wcqv-button">{`${clinic.c_email}, ${clinic.c_phonenumber}`}</a>
          </div>
          {' '}
          <Link to={`/appointment?toid=${clinic.c_id}&type=${'clinic'}`} data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="384" data-product_sku="017" aria-label="Add “Hair Oil Serum 30ml Drops” to your cart" rel="nofollow">Book appointment</Link>
          {' '}
        </div>
      </div>
    </div>
  );
}

export default ClinicItem;
