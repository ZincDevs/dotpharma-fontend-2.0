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
import { useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { data } from '../../data/addresses';

function OrderHome() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [vilages, setVilages] = useState([]);
  const [sum, setSum] = useState(0);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const cart = profile?.cart;
  const getTotalPrice = () => {
    let mSum = 0;
    _.forEach(cart, value => {
      mSum += Number(value.medicine.m_price);
    });
    setSum(mSum);
  };

  const mapDataToSelects = (levels, leveltype) => {
    switch (leveltype) {
      case 'districts':
        setDistricts(levels);
        break;
      case 'sectors':
        setSectors(levels);
        break;
      case 'cells':
        setCells(levels);
        break;
      case 'villages':
        setVilages(levels);
        break;
      default:
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const createOption = (value, key) => <option key={key}>{value}</option>;

  const changeHandler = (levelName, dataList, leveType) => {
    dataList.forEach(level => {
      if (levelName === level.name) {
        mapDataToSelects(level.children, leveType);
      }
    });
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    setProvinces(data);
  }, [provinces, districts, sectors, cells, vilages]);

  useEffect(() => {
    getTotalPrice();
  }, [sum]);

  const createOrder = e => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="order-home-container">
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
                          <h3>Derivery information</h3>
                          <div className="woocommerce-billing-fields__field-wrapper" />
                        </div>
                      </div>
                    </div>
                    <div className="clean" />
                    <div className="clean" />
                    <form
                      className="checkout_coupon woocommerce-form-coupon"
                    >
                      <div className="woocommerce-form-coupon-toggle">
                        <div className="">
                          <div className="woocommerce-billing-fields">
                            <h5>Personal information</h5>
                            <div className="woocommerce-billing-fields__field-wrapper" />
                          </div>
                        </div>
                      </div>
                      <hr className="form-separator" />

                      <p
                        className="form-row form-row-first validate-required"
                        id="billing_first_name_field"
                        data-priority="10"
                      >
                        <label htmlFor="billing_first_name" className="">
                          Full name&nbsp;
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <span className="woocommerce-input-wrapper">
                          <input
                            type="text"
                            className="input-text "
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder=""
                            autoComplete="given-name"
                            onChange={handleNameChange}
                            value={name}
                          />
                        </span>
                      </p>

                      <p
                        className="form-row form-row-last validate-required"
                        id="billing_last_name_field"
                        data-priority="20"
                      >
                        <label htmlFor="billing_last_name" className="">
                          Email&nbsp;
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
                            value={email}
                            onChange={handleEmailChange}
                            autoComplete="family-name"
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
                            type="text"
                            className="input-text"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder=""
                            value={phone}
                            autoComplete="family-name"
                            onChange={handlePhoneChange}
                          />
                        </span>
                      </p>
                      <div className="woocommerce-form-coupon-toggle">
                        <div className="">
                          <div className="woocommerce-billing-fields">
                            <h5>Address information</h5>
                            <div className="woocommerce-billing-fields__field-wrapper" />
                          </div>
                        </div>
                      </div>
                      <hr className="form-separator" />
                      <p
                        className="form-row form-row-last validate-required"
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
                        className="form-row form-row-last validate-required"
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
                        className="form-row form-row-last validate-required"
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
                        className="form-row form-row-last validate-required"
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
                        className="form-row form-row-last validate-required"
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
                            onChange={e => changeHandler(e.target.value, [], 'none')}
                          >
                            <option>Select district</option>
                            {vilages.map((village, index) => createOption(village.name, index))}
                          </select>
                        </span>
                      </p>
                      <p
                        className="form-row form-row-last validate-required"
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
                            value=""
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
                                        {item?.medicine?.m_price}
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
                              onClick={createOrder}
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
          <Modal.Title>Payment mode</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please choose payment mode</Modal.Body>
        <Modal.Footer>
          <button className="button alt" onClick={e => {}}>
            Pay on delivery
          </button>
          <button className="button alt" onClick={e => {}}>
            Pay with MoMo
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderHome;
