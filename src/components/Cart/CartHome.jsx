/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import key from 'uniqid';
import CartHomeItem from './CartHomeItem';

export default function CartHome() {
  const [totPrice, setTotPrice] = useState(0);
  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const quantity = useSelector(state => state.cart.data.quantity);
  const dispatch = useDispatch();

  const cart = profile?.cart;
  const totalPrice = items => {
    if (!items) return 0;
    let p = 0;
    items.forEach(item => {
      p += parseInt(item?.medicine?.m_price, 10);
    });
    return p;
  };
  const total = totalPrice(cart);
  const count = cart?.length || 0;
  const handleTotalPrice = p => {
    setTotPrice(p);
  };

  return (
    <div id="qodef-page-wrapper" className="">
      <div id="qodef-page-outer">
        <div
          className="qodef-page-title qodef-m qodef-title--breadcrumbs qodef-alignment--left qodef-vertical-alignment--header-bottom"
        >
          <div className="qodef-m-inner">
            <div className="qodef-m-content qodef-content-grid ">
              <div itemProp="breadcrumb" className="qodef-breadcrumbs">
                <a
                  itemProp="url"
                  className="qodef-breadcrumbs-link"
                  href="/"
                >
                  <span itemProp="title">Home</span>
                </a>
                <span
                  className="qodef-breadcrumbs-separator"
                />
                <span
                  itemProp="title"
                  className="qodef-breadcrumbs-current"
                >
                  Cart
                </span>

              </div>
            </div>
          </div>
        </div>
        <div id="qodef-page-inner" className="qodef-content-grid">
          <main id="qodef-page-content" className="qodef-grid qodef-layout--template ">
            <div className="qodef-grid-inner clear">
              <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                <div className="woocommerce">
                  <div id="qodef-woo-page" className="qodef--cart">
                    <div className="woocommerce-notices-wrapper" />
                    <form
                      className="woocommerce-cart-form"
                      action="https://pharmacare.qodeinteractive.com/cart/"
                      method="post"
                    >

                      <table
                        className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th className="product-remove">Action</th>
                            <th className="product-thumbnail">Image</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {_.map(cart, item => item).map((item, index) => {
                            const mItem = { ...item };
                            return (<CartHomeItem item={mItem} key={index} />);
                          })}
                        </tbody>
                      </table>
                    </form>

                    <div className="cart-collaterals">
                      <div className="cart_totals ">

                        <div className="wc-proceed-to-checkout">

                          <Link
                            to="/checkout"
                            className="checkout-button button alt wc-forward"
                          >
                            Proceed to checkout

                          </Link>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
