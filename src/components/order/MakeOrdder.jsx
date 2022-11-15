/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';
import key from 'uniqid';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import data from '../../data/addresses.json';
import FormButtonSubmit from '../shared/FormButtonSubmit';
import { createOrder } from '../../app/features/order/_orderAction';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import FormTextInput from '../shared/FormTextInput';
import { uploadMedicineImage } from '../../helpers';
import { Button } from '../shared/Buttons';

function MakeOrdder() {
  const [prescription, setPrescription] = useState('');
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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const formSteps = ['Personal Information', 'Medicine Information', 'Review Information', 'Submit'];
  const [formCurrentStep, setFormCurrentStep] = useState(0);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const cart = profile?.cart;
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

  const handlePrescription = e => {
    setPrescription(e.target.value);
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

  // useEffect(() => {
  //   getTotalPrice();
  // }, [sum]);

  const createOrderEvent = e => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="order-home-container">
      <div className="qodef-content-grid py-2 h-75 min">
        <h5 className="h4" style={{ fontWeight: 'normal', color: '#3ec389' }}>Order medicine form</h5>
        <div className="d-flex h-100 min-vh-100 gap-3">
          <div className="w-25 force-main-color-bg p-4 d-flex flex-column gap-2">
            <h3 className="text-white" style={{ fontWeight: 'bold' }}>Step 1</h3>
            <p className="text-white">This will consist of your personal information.</p>
            <div className="d-flex flex-column  justify-content-center pt-2">
              {
               formSteps.map((step, index) => (
                 <div
                   key={step}
                 >
                   <div className="d-flex gap-2 align-items-center flex-row text-white" role="button">
                     <span className={`border rounded-circle ${index <= formCurrentStep ? 'bg-green text-white' : ''}`} style={{ padding: '2px 10px' }}>
                       {index + 1}
                     </span>
                     <span>
                       {step}
                     </span>
                   </div>
                   {
                     (index !== formSteps.length - 1) && <div style={{ height: '5em', width: '0' }} className={`ml-3 ${index <= formCurrentStep ? 'border-green' : 'border-white opacity-50'}`} />
                 }
                 </div>
               ))
           }
            </div>
          </div>
          <div className="w-75">
            <ToastContainer />
            <div>
              {
                formCurrentStep === 0
              && (
              <form className="flex flex-wrap">
                <p
                  className="col-6"
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
                  className="col-6"
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
                  className="col-6"
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
                  className="col-6"
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
                  className="col-6"
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
                  className="col-6"
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
                  className="col-6"
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
                <p
                  className="col-6"
                  id="billing_last_name_field"
                  data-priority="20"
                >
                  <label htmlFor="billing_last_name" className="">
                    Prescription&nbsp;
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <br />
                  <span className="woocommerce-input-wrapper">
                    <input
                      type="file"
                      className="input-text"
                      name="prescription"
                      id="prescription"
                      placeholder="Enter discount"
                      autoComplete="family-name"
                      onChange={async e => {
                        setIsUploadingImage(true);
                        await uploadMedicineImage(
                          e.target.files[0],
                          (err, uploadUrl) => {
                            setIsUploadingImage(false);
                            if (err) {
                              toast.error('Unable to upload image!');
                            } else {
                              setPrescription(uploadUrl);
                            }
                          },
                        );
                      }}
                    />
                  </span>
                </p>
              </form>
              )
              }
              <div className="col-12 flex justify-content-end gap-2 align-items-end">
                {
                  formCurrentStep > 0 && <Button text="Back" handleOnclick={() => setFormCurrentStep(cur => cur - 1)} />
                }
                <Button text="Next" handleOnclick={() => setFormCurrentStep(cur => cur + 1)} />
              </div>
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
                    className="woocommerce-checkout-payment d-flex justify-content-end align-items-end col-12"
                  >
                    <div className="form-row place-order flex gap-3">
                      {/* <button
                        type="button"
                        className="button alt"
                        name="woocommerce_checkout_place_order"
                        id="place_order"
                        value="Place order"
                        data-value="Place order"
                        onClick={createOrderEvent}
                      >
                        Place order
                      </button> */}

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
                        if (_.isEmpty(prescription)
                || _.isEmpty(phone)
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
                          patid: profile.u_id,
                          refcode: refCode,
                          prescription,
                          medicines,
                          address,
                          totalamount: 0,
                          type: 'Prescription-Order',
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
        </div>
      </div>
    </div>
  );
}

export default MakeOrdder;
