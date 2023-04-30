/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';
import key from 'uniqid';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import data from '../../data/addresses.json';
import FormButtonSubmit from '../shared/FormButtonSubmit';
import { createOrder } from '../../app/features/order';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import FormTextInput from '../shared/FormTextInput';
import { createPayment, verifypayment, removeCart } from '../../api';

function OrderPaymeny() {
  const [phone, setPhone] = useState('');
  const [loadingCreatePayment, setLoadingCreatePayment] = useState(false);
  const [loadingCreateOrder, setLoadingCreateOrder] = useState(false);
  const [showConfirmPayment, setShowConfirmPayment] = useState(false);
  const [ref, setRef] = useState('');
  const orderData = JSON.parse(sessionStorage.getItem('orderdata') || '{}');
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const cart = profile?.cart;

  useEffect(() => {
    if (_.isEmpty(orderData)) {
      navigate('/');
    }
  }, []);

  const initiatePayment = async () => {
    setLoadingCreatePayment(true);
    await createPayment(
      {
        amount: orderData.totalamount,
        number: phone,
      },
      (err, data) => {
        setLoadingCreatePayment(false);
        if (err) {
          console.log(err);
          toast.error('Error occured while initiating payment');
        } else {
          setRef(data.ref);
          setShowConfirmPayment(true);
        }
      },
    );
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  return (
    <div className="order-home-container">
      <ToastContainer />
      <div>
        <div id="qodef-page-inner" className="qodef-content-grid">
          <main
            id="qodef-page-content"
            className="qodef-grid qodef-layout--template "
          >
            <div className="qodef-grid-inner clear">
              <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                <div className="woocommerce">
                  <div className="woocommerce-notices-wrapper" />
                  <div id="qodef-woo-page" className="qodef--checkout">
                    <div className="woocommerce-form-coupon-toggle">
                      <div className="">
                        <div className="woocommerce-billing-fields">
                          <h3>Payment information</h3>
                          <div className="woocommerce-billing-fields__field-wrapper" />
                        </div>
                      </div>
                    </div>
                    <hr className="form-separator" />
                    <div className="clean" />
                    <div className="clean" />
                    <form className="checkout_coupon woocommerce-form-coupon">
                      <p
                        className=" form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Payment phone number&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="tel"
                            className="input-text"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder="Ex: 07XXXXXXXX"
                            value={phone}
                            autoComplete="family-name"
                            onChange={handlePhoneChange}
                          />
                        </span>
                      </p>
                    </form>
                    <div className="woocommerce-notices-wrapper">
                      <form
                        name="checkout"
                        method="post"
                        className="checkout woocommerce-checkout"
                        encType="multipart/form-data"
                        noValidate="novalidate"
                      >
                        <div
                          id="payment"
                          className="woocommerce-checkout-payment"
                        >
                          <div className="form-row place-order">
                            {loadingCreatePayment ? (
                              <div className="loading-container">
                                {' '}
                                <ColorRing
                                  visible
                                  height="40"
                                  width="40"
                                  ariaLabel="blocks-loading"
                                  wrapperStyle={{}}
                                  wrapperClass="blocks-wrapper"
                                  colors={[
                                    '#66bc89',
                                    '#66bc89',
                                    '#66bc89',
                                    '#66bc89',
                                    '#66bc89',
                                    '#66bc89',
                                  ]}
                                />
                              </div>
                            ) : (
                              <button
                                type="button"
                                className="button alt"
                                name="woocommerce_checkout_place_order"
                                id="place_order"
                                value="Place order"
                                data-value="Place order"
                                onClick={initiatePayment}
                              >
                                <i className="fa-solid fa-credit-card" />
                                {' '}
                                Pay
                                {' '}
                                {orderData.totalamount}
                                {' '}
                                RWF
                              </button>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Modal
        show={showConfirmPayment}
        onHide={() => setShowConfirmPayment(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Place order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed?</Modal.Body>
        <Modal.Footer>
          {loadingCreateOrder ? (
            <div className="loading-container">
              {' '}
              <ColorRing
                visible
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                  '#66bc89',
                ]}
              />
            </div>
          ) : (
            <div className="butns-ordery-pay-mode">
              <div className="horizontal-separator" />
              <FormButtonSubmit
                onClick={async e => {
                  setLoadingCreateOrder(true);
                  await verifypayment(ref, async (err, data) => {
                    if (err) {
                      console.log(err);
                      setLoadingCreateOrder(false);
                      setShowConfirmPayment(false);
                      toast.error('Error occured while initiating payment');
                    } else if (data.paymentStatus === 'successful') {
                      orderData.ref = ref;

                      // Create order
                      await createOrder(axios, orderData, async (e, data) => {
                        setLoadingCreateOrder(false);
                        setShowConfirmPayment(false);
                        if (e) {
                          console.log('Error creating order', e);
                          toast.error('Could not create order!');
                        } else {
                          await removeCart(axios, cart, () => {});
                          toast.success(
                            'Your order was submitted successfully!',
                          );
                        }
                        setTimeout(() => navigate('/'), 5500);
                      });
                    } else if (data.paymentStatus === 'failed') {
                      toast.error('Your payment was not successfull!');
                      setShowConfirmPayment(false);
                      setTimeout(() => navigate('/'), 5500);
                    } else if (data.paymentStatus === 'pending') {
                      setLoadingCreateOrder(false);
                      toast.info(
                        'Please confirm the payment before subimmiting order!',
                      );
                    }
                  });
                }}
                value="Confirm order"
              />
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderPaymeny;
