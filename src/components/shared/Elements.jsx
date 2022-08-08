/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { googleIcon } from '../../assets';

function ToolBarTDP({
  link, icon, title, subtitle, count,
}) {
  return (
    <div className="toolbar-links d-flex justify-content-center align-items-center">
      <div>
        <Link to={link} className="qodef-wishlist-widget-link" title="View Wishlist">
          <div className="d-flex">
            <div>
              <span className="tl-icon-count-holder">
                <span className="tl-icon"><i className={icon} /></span>
                {count && (<span className="tl-count" style={{ zoom: 1 }}>1</span>)}
              </span>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div className="">
                <span className="tl-text-holder d-flex flex-column">
                  <span className="tl-title">{title}</span>
                  <span className="tl-subtitle">{subtitle}</span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function Price({ discount, price, center }) {
  const discountPrice = (discount * price) / 100;
  const finalPrice = (!discount || discount === 0) ? price : price - discount;
  return (
    <div className={`d-flex ${center && 'justify-content-center align-items-center'}`}>
      <div className="qodef-woo-product-price price">
        {discount && (
          <del aria-hidden="true">
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>
              {discountPrice}
            </span>
          </del>
        )}
        <ins>
          <span className="woocommerce-Price-amount amount">
            <span className="woocommerce-Price-currencySymbol">$</span>
            {finalPrice}
          </span>
        </ins>
      </div>
    </div>
  );
}

function ItemFotter({ center }) {
  return (
    <div className={`d-flex  item-fotter ${center && 'justify-content-center align-items-center'}`}>
      <div className="d-flex footer-child">
        <i className="bi bi-eye px-1" />
        <a href="#" className="button yith-wcqv-button" data-product_id="3211">Quick View</a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <i className="bi bi-heart px-1" />
        <a href="#" className="button yith-wcqv-button" data-product_id="3211">Quick View</a>
      </div>
    </div>
  );
}

function Button({ handleOnClick, label, classes }) {
  return (
    <div className="py-1 input-text-content w-auto">
      <button type="submit" className={`w-100 px-3 py-3 ${classes}`} onClick={handleOnClick}>
        {label}
      </button>
    </div>
  );
}

function GoogleBtn() {
  return (
    <div className="py-2 w-auto input-text-content">
      <Link to="*">
        <div className="w-100 py-2 px-3 google-btn d-flex justify-content-center align-items-center">
          <div>
            <img src={googleIcon} style={{ width: 30, height: 23 }} alt="google" />
            <span className="px-1">Continue with google</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProgressBar({ reff }) {
  return (
    <div ref={reff} className="">
      <div className="progress">
        <div className="indeterminate"> </div>
      </div>
    </div>
  );
}

export {
  Button,
  GoogleBtn,
  ProgressBar,
  ToolBarTDP,
  Price,
  ItemFotter,
};
