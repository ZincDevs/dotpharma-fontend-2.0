/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import CartMenuItem from './CartMenuItem';

export default function CartMenu({ profile }) {
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

  return (
    <div
      id="pharmacare_core_woo_dropdown_cart-2"
      className="widget widget_pharmacare_core_woo_dropdown_cart qodef-header-widget-area-one"
      data-area="header-widget-one"
    >
      <div className="qodef-woo-dropdown-cart qodef-m">
        <div className="qodef-woo-dropdown-cart-inner qodef-m-inner">
          <Link itemProp="url" className="qodef-m-opener" to="/cart">
            <span className="qodef-cart-icon-count-holder">
              <span className="qodef-m-opener-icon force-main-color">
                <span
                  className="qodef-icon-fontkiko kiko-paper-bag"
                />
                <i className="bi bi-cart" style={{ fontSize: '45px' }} />

              </span>
              {(count > 0) && (<span className="qodef-m-opener-count force-main-color">{count}</span>)}
            </span>

            <span className="qodef-cart-text-holder">
              <span className="qodef-cart-title">Cart</span>
              <span className="qodef-m-order-amount">
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    {total}
                    <span
                      className="woocommerce-Price-currencySymbol"
                      style={{ marginLeft: '5px' }}
                    >
                      RWF
                    </span>
                  </bdi>
                </span>

              </span>
            </span>
          </Link>
          <div className="qodef-m-dropdown">
            <div className="qodef-m-dropdown-inner">
              <div className="qodef-woo-dropdown-items">
                {_.map(cart, item => (
                  <CartMenuItem
                    item={item}
                  />
                ))}
              </div>
              <div className="qodef-m-order-details">
                <h5 className="qodef-m-order-label">Total:</h5>
                <span className="qodef-m-order-amount">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {total}
                      <span
                        className="woocommerce-Price-currencySymbol"
                        style={{ marginLeft: '5px' }}
                      >
                        RWF
                      </span>
                    </bdi>
                  </span>

                </span>
              </div>
              <div className="qodef-m-action">
                {
                  !cart?.length ? (
                    <div className="flex items-center justify-center text-center py-3 font-weight-bold" style={{ backgroundColor: '#ccc', color: 'white' }}>
                      Add medicine  &amp; Checkout

                    </div>
                  )
                    : (
                      <Link
                        itemProp="url"
                        to="/cart"
                        className="qodef-m-action-link force-main-color-bg"
                      >
                        View Cart &amp; Checkout

                      </Link>
                    )
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
