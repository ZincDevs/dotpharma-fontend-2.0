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
import { createOrder } from '../../app/features/order/_orderAction';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

function Appointment() {
  const [prescription, setPrescription] = useState('');
  const [phone, setPhone] = useState([]);
  const [name, setName] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const cart = profile?.cart;

  const createOption = (value, key) => <option key={key}>{value}</option>;

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePrescription = e => {
    setPrescription(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };
  const createOrderEvent = e => {
    e.preventDefault();
    openModal();
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
                          <h3>Patient information</h3>
                          <div className="woocommerce-billing-fields__field-wrapper" />
                        </div>
                      </div>
                    </div>
                    <hr className="form-separator" />
                    <div className="clean" />
                    <div className="clean" />
                    <form className="checkout_coupon woocommerce-form-coupon">
                      <p
                        className="form-row form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Name&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder="Receiver name"
                            value={name}
                            autoComplete="family-name"
                            onChange={handleNameChange}
                          />
                        </span>
                      </p>
                      <p
                        className="form-row form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Phone number&nbsp;
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
                            placeholder="Receiver phone number"
                            value={phone}
                            autoComplete="family-name"
                            onChange={handlePhoneChange}
                          />
                        </span>
                      </p>
                      <p
                        className="form-row form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Prescription&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder="Enter prescription"
                            value={prescription}
                            autoComplete="family-name"
                            onChange={handlePrescription}
                          />
                        </span>
                      </p>
                    </form>

                    <div className="woocommerce-notices-wrapper">
                      <form
                        name="checkout"
                        method="post"
                        className="checkout woocommerce-checkout"
                        action="https://pharmacare.qodeinteractive.com/checkout/"
                        encType="multipart/form-data"
                        noValidate="novalidate"
                      >
                        <div
                          id="payment"
                          className="woocommerce-checkout-payment"
                        >
                          <div className="form-row place-order">
                            <button
                              type="button"
                              className="button alt"
                              name="woocommerce_checkout_place_order"
                              id="place_order"
                              value="Place order"
                              data-value="Place order"
                              onClick={createOrderEvent}
                            >
                              Request an appointment
                            </button>

                            <input
                              type="hidden"
                              id="woocommerce-process-checkout-nonce"
                              name="woocommerce-process-checkout-nonce"
                              value="05b04921d5"
                            />
                            <input
                              type="hidden"
                              name="_wp_http_referer"
                              value="/?wc-ajax=update_order_review"
                            />
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
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Payment mode</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please choose payment mode</Modal.Body>
        <Modal.Footer>
          {loading ? (
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
              <FormButtonSubmit
                onClick={async e => {
                  setLoading(true);
                  const refCode = profile.cart
                    .map(e => e.medicine.m_id)
                    .join('/');
                  const data = {
                    p_id: profile.u_id,
                    prescription,
                    refcode: refCode,
                    name,
                    address: [
                      phone,
                      province,
                      district,
                    ].join(','),
                  };
                  await createOrder(axios, data, (e, data) => {
                    setLoading(false);
                    setIsOpen(false);
                    if (e) {
                      toast.error('Could not create order!');
                    } else {
                      toast.success('Your order was submitted successfully!');
                    }
                    setTimeout(() => navigate('/'), 5500);
                  });
                }}
                value="Pay on delivery"
              />
              <div className="horizontal-separator" />
              <FormButtonSubmit onSubmit={e => {}} value="Pay with MOMO" />
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Appointment;
