/* eslint-disable max-len */
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
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { createAppointment } from '../../api/_appointment';
import { getClinicInsurance } from '../../app/features/clinic';

function Appointment() {
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  useEffect(() => {
    const query1 = new URLSearchParams(search);
    if (query1.get('type') === 'clinic') {
      getClinicInsurance(dispatch, query1.get('toid'));
    }
  }, []);

  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const clinicInsurances = useSelector(state => state.clinicInsurances?.clinicInsurances);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePrescription = e => {
    setMessage(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const createApointmentEvent = async e => {
    e.preventDefault();
    if (_.isEmpty(email) || _.isEmpty(phone) || _.isEmpty(message) || _.isEmpty(name) || _.isEmpty(date) || _.isEmpty(time)) {
      toast.error('Please complete all fields');
      return;
    }
    const toid = query.get('toid');
    const type = query.get('type');
    const data = {
      patid: profile?.patients[0]?.p_id,
      docid: type === 'doctor' ? toid : null,
      clid: type === 'clinic' ? toid : null,
      deasese: message,
      adate: new Date(`${date} ${time}`),
      name,
      phone,
      email,
      atype: type === 'clinic' ? 'Clinic-appointment' : 'Doctor-appointment',
    };
    setLoading(true);
    await createAppointment(axios, data, (err, data) => {
      setLoading(false);
      if (err) {
        toast.error('Could not create appointment!');
      } else {
        toast.success('Your\'ve successfully created appointment!');
      }
      setTimeout(() => navigate('/'), 5500);
    });
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
                          <h3>Personal information</h3>
                          <div className="woocommerce-billing-fields__field-wrapper" />
                        </div>
                      </div>
                    </div>
                    <hr className="form-separator" />
                    <div className="clean" />
                    <div className="clean" />
                    <form className="checkout_coupon woocommerce-form-coupon flex-wrap gap-2 form-appo-mobile">
                      <p
                        className="form-row-last validate-required col-5 p-mobile"
                        id="_field"
                        data-priority="20"
                      >
                        <label htmlFor="" className="">
                          Names&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text"
                            name=""
                            id=""
                            placeholder="Patient name"
                            value={name}
                            autoComplete="off"
                            onChange={handleNameChange}
                          />
                        </span>
                      </p>
                      <p
                        className=" form-row-last validate-required col-5 p-mobile"
                        id="_field"
                        data-priority="20"
                      >
                        <label htmlFor="" className="">
                          Phone number&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="tel"
                            className="input-text"
                            name=""
                            id=""
                            placeholder="Patient phone number"
                            value={phone}
                            autoComplete="off"
                            onChange={handlePhoneChange}
                          />
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required col-5 p-mobile"
                        id="_field"
                        data-priority="20"
                      >
                        <label htmlFor="" className="">
                          Email&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="email"
                            className="input-text"
                            name=""
                            id=""
                            placeholder="Patient email"
                            value={email}
                            autoComplete="off"
                            onChange={handleEmailChange}
                          />
                        </span>
                      </p>
                      {query.get('type') === 'clinic' ? (
                        <p
                          className="form-row-last validate-required col-5 p-mobile"
                          id="_field"
                          data-priority="20"
                        >
                          <label htmlFor="" className="">
                            Choose insurance&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              type="email"
                              className="input-text"
                              name=""
                              id=""
                              placeholder="Patient email"
                              value={email}
                              autoComplete="off"
                              onChange={handleEmailChange}
                            >
                              <option value="">Choose insurance</option>
                              {clinicInsurances?.map(insurance => (<option value={insurance.id}>{insurance.insurance_name}</option>))}
                            </select>
                          </span>
                        </p>
                      ) : '' }
                      <p
                        className="form-row-last validate-required d-flex flex-column col-5"
                        data-priority="20"
                      >
                        <label htmlFor="" className="">
                          Choose date and time&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="d-flex justify-content-between p-date-time-mobile" style={{ height: '3.6em' }}>
                          <input
                            type={'date'}
                            className="input-text col-5 h-100"
                            onChange={e => { setDate(e.target.value); }}
                          />
                          <input
                            type={'time'}
                            className="input-text col-5 h-100"
                            onChange={e => {
                              setTime(e.target.value);
                            }}
                          />
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required col-10 p-mobile"
                        id="_field"
                        data-priority="20"
                      >
                        <label htmlFor="" className="">
                          Send message to doctor &nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <textarea
                            className="input-text"
                            name=""
                            id=""
                            value={message}
                            placeholder="Enter message"
                            autoComplete="off"
                            rows={5}
                            onChange={handlePrescription}
                          >
                            {message}

                          </textarea>
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
                            <button
                              type="button"
                              className="button alt"
                              name="woocommerce_checkout_place_order"
                              id="place_order"
                              value="Place order"
                              data-value="Place order"
                              onClick={createApointmentEvent}
                            >
                              {!loading ? 'Request an appointment' : 'Creating appointment...'}
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
    </div>
  );
}

export default Appointment;
