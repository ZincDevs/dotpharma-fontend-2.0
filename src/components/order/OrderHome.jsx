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
import { createOrder } from '../../app/features/order/_orderAction';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import FormTextInput from '../shared/FormTextInput';

function OrderHome() {
  const [phone, setPhone] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [sector, setSector] = useState('');
  const [cell, setCell] = useState('');
  const [village, setVillage] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [vilages, setVilages] = useState([]);
  const [streetNumber, setStreetNumber] = useState('');
  const [sum, setSum] = useState(0);
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
  const getTotalPrice = () => {
    let mSum = 0;
    _.forEach(cart, value => {
      mSum += Number(value.medicine.m_price * value.c_quantity);
    });
    setSum(mSum);
  };

  const mapDataToSelects = (levels, leveltype, level) => {
    switch (leveltype) {
      case 'districts':
        setDistricts(levels);
        setDistrict(level);
        break;
      case 'sectors':
        setSectors(levels);
        setSector(level);
        break;
      case 'cells':
        setCells(levels);
        setCell(level);
        break;
      case 'villages':
        setVilages(levels);
        setVillage(level);
        break;
      default:
    }
  };

  const createOption = (value, key) => <option key={key}>{value}</option>;

  const changeHandler = (levelName, dataList, leveType) => {
    if (
      levelName === 'EAST'
      || levelName === 'WEST'
      || levelName === 'SOUTH'
      || levelName === 'KIGALI'
      || levelName === 'NORTH'
    ) {
      setProvince(levelName);
      dataList.forEach(level => {
        if (levelName === level.name) {
          mapDataToSelects(level.children, leveType, level.name);
        }
      });
      return;
    }
    dataList.forEach(level => {
      if (levelName === level.name) {
        mapDataToSelects(level.children, leveType, levelName);
      } else {
        mapDataToSelects([], 'none', levelName);
      }
    });
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleStreetChange = e => {
    setStreetNumber(e.target.value);
  };

  useEffect(() => {
    setProvinces(data);
    // setProvince(data[0].name);
  }, [provinces, districts, sectors, cells, vilages]);

  useEffect(() => {
    getTotalPrice();
  }, [sum]);

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
                          <h3>Delivery information</h3>
                          <div className="woocommerce-billing-fields__field-wrapper" />
                        </div>
                      </div>
                    </div>
                    <hr className="form-separator" />
                    <div className="clean" />
                    <div className="clean" />
                    <form className="checkout_coupon woocommerce-form-coupon">
                      {/* <p
                        className=" form-row-last validate-required"
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
                          <FormTextInput
                            value={name}
                            onChange={handleNameChange}
                          />
                        </span>
                      </p> */}
                      <p
                        className=" form-row-last validate-required"
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
                        className="form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Province&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <select
                            className="input-text address-select"
                            name="billing_last_name"
                            id="billing_last_name"
                            aria-label="Default select example"
                            onChange={e => changeHandler(
                              e.target.value,
                              provinces,
                              'districts',
                            )}
                          >
                            <option>Select province</option>
                            {provinces.map((province, index) => createOption(province.name, index))}
                          </select>
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          District&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <select
                            className="input-text address-select"
                            name="billing_last_name"
                            id="billing_last_name"
                            aria-label="Default select example"
                            onChange={e => changeHandler(
                              e.target.value,
                              districts,
                              'sectors',
                            )}
                          >
                            <option>Select district</option>
                            {districts.map((district, index) => createOption(district.name, index))}
                          </select>
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Sector&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <select
                            className="input-text address-select"
                            name="billing_last_name"
                            id="billing_last_name"
                            aria-label="Default select example"
                            onChange={e => changeHandler(e.target.value, sectors, 'cells')}
                          >
                            <option>Select district</option>
                            {sectors.map((sector, index) => createOption(sector.name, index))}
                          </select>
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Cell&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <select
                            className="input-text address-select"
                            name="billing_last_name"
                            id="billing_last_name"
                            aria-label="Default select example"
                            onChange={e => changeHandler(e.target.value, cells, 'villages')}
                          >
                            <option>Select district</option>
                            {cells.map((cell, index) => createOption(cell.name, index))}
                          </select>
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Village&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <select
                            className="input-text address-select"
                            name="billing_last_name"
                            id="billing_last_name"
                            aria-label="Default select example"
                            onChange={e => {
                              changeHandler(e.target.value, ['no-child'], 'none');
                            }}
                          >
                            <option>Select village</option>
                            {vilages.map((village, index) => createOption(village.name, index))}
                          </select>
                        </span>
                      </p>
                      <p
                        className="form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Street number&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text "
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder=""
                            value={streetNumber}
                            onChange={handleStreetChange}
                            autoComplete="family-name"
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
                        <h3 id="order_review_heading">Your order</h3>
                        <div
                          id="order_review"
                          className="woocommerce-checkout-review-order"
                        >
                          <table className="shop_table woocommerce-checkout-review-order-table">
                            <thead>
                              <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              {_.map(cart, item => (
                                <tr className="cart_item">
                                  <td className="product-name">
                                    {item?.medicine?.m_name}
                                    &nbsp;
                                    {' '}
                                    <strong className="product-quantity">
                                      &nbsp;
                                    </strong>
                                    {' '}
                                  </td>
                                  <td className="product-total">
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          RWF
                                        </span>
                                        {Number(item?.medicine?.m_price) * item?.c_quantity}
                                      </bdi>
                                    </span>
                                    {' '}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr className="order-total">
                                <th>Total amount</th>
                                <td>
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          RWF
                                          {' '}
                                        </span>
                                        {sum}
                                      </bdi>
                                    </span>
                                  </strong>
                                  {' '}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>

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
                              Place order
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
          <Modal.Title>Place order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed?</Modal.Body>
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
              <div className="horizontal-separator" />
              <FormButtonSubmit
                onClick={async e => {
                  if (_.isEmpty(phone)
                  || _.isEmpty(province)
                  || _.isEmpty(district)
                  || _.isEmpty(sector)
                  || _.isEmpty(cell)
                  || _.isEmpty(village)
                  ) {
                    toast.error('Please provide all information!');
                    setIsOpen(false);
                    return;
                  }
                  setLoading(true);
                  const refCode = `ORDER-${Math.random(10000, 99999)}-${Date.now().toString().substring(Date.now().toString().length - 4, Date.now().toString().length - 1)}`;
                  const medicines = profile.cart
                    .map(e => e.medicine.m_id);
                  const address = [
                    phone,
                    province,
                    district,
                    sector,
                    cell,
                    village,
                    streetNumber,
                  ].join(',');

                  const data = {
                    p_id: profile.u_id,
                    refcode: refCode,
                    medicines,
                    address,
                    totalamount: sum,
                    type: 'Medine-Order',
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
                value="Submit order"
              />
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderHome;
