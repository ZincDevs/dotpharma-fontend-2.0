/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';
import CartHomeItem from './CartHomeItem';

export default function CartHome() {
  const [totPrice, setTotPrice] = useState(0);
  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
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
                  href="https://pharmacare.qodeinteractive.com/"
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
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">&nbsp;</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {_.map(cart, item => (
                            <CartHomeItem item={item} />
                          ))}
                        </tbody>
                      </table>
                    </form>

                    <div className="cart-collaterals">
                      <div className="cart_totals ">

                        <h2>Cart totals</h2>

                        <table cellSpacing="0" className="shop_table shop_table_responsive">

                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span
                                      className="woocommerce-Price-currencySymbol"
                                    >
                                      $
                                    </span>
                                    57.00
                                  </bdi>
                                </span>

                              </td>
                            </tr>

                            <tr className="order-total">
                              <th>Total</th>
                              <td data-title="Total">
                                <strong>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span
                                        className="woocommerce-Price-currencySymbol"
                                      >
                                        $
                                      </span>
                                      57.00
                                    </bdi>
                                  </span>
                                </strong>
                                {' '}

                              </td>
                            </tr>

                          </tbody>
                        </table>

                        <div className="wc-proceed-to-checkout">

                          <a
                            href="https://pharmacare.qodeinteractive.com/checkout/"
                            className="checkout-button button alt wc-forward"
                          >
                            Proceed to checkout

                          </a>
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
