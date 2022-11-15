/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
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
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
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
  const [orderedMedices, setOrderedMedicines] = useState([{ medicineName: '', medicineDescription: '', imageUrl: '' }]);
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const formSteps = ['Personal Information', 'Medicine Information', 'Review Information'];
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

  const scrollToBottom = () => {
    const element = document.getElementById('order-element');
    element.scrollTop = element.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [orderedMedices.length]);

  useEffect(() => {
    setProvinces(data);
    // setProvince(data[0].name);
  }, [provinces, districts, sectors, cells, vilages]);

  const createOrderEvent = e => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="order-home-container h-75">
      <div className="qodef-content-grid flex flex-column h-100 pt-2">
        <h5 className="h4" style={{ fontWeight: 'normal', color: '#3ec389' }}>Order medicine form</h5>
        <div className="d-flex gap-3 h-100 overflow-auto">
          <div className="w-25 force-main-color-bg p-4 d-flex flex-column gap-2">
            <h3 className="text-white" style={{ fontWeight: 'bold' }}>
              Step
              {' '}
              {formCurrentStep + 1}
            </h3>
            <p className="text-white">{formCurrentStep === 0 ? 'Complete this form with the information about your address.' : formCurrentStep === 1 ? 'You will also complete this form with all medicines you want us to deliver with you.' : 'Finally, you can review all information you have given so that you can submit your order.' }</p>
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
          <div className="w-75 overflow-auto" id="order-element">
            <ToastContainer />
            <form style={{ minHeight: '70%' }}>
              {
    formCurrentStep === 0
      && (
        <div className="flex flex-wrap">
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
              Email&nbsp;
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
                placeholder="Receiver email address"
                value={email}
                autoComplete="family-name"
                onChange={e => setEmail(e.target.value)}
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
                name="street"
                id="billing_last_name"
                placeholder="Enter street number"
                value={streetNumber}
                onChange={handleStreetChange}
                autoComplete="family-name"
              />
            </span>
          </p>

        </div>
      )
    }
              {
      formCurrentStep === 1 && (
        <>
          {
          orderedMedices.map((data, index) => (
            <div className="flex flex-wrap" key={index}>
              <p
                className="col-6"
                id="billing_last_name_field"
                data-priority="20"
              >
                <label htmlFor="billing_last_name" className="">
                  Medicine Name&nbsp;
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <span className="woocommerce-input-wrapper">
                  <input
                    type="text"
                    className="input-text"
                    name="medicine_name"
                    id="medicine_name"
                    placeholder="Medicine Name"
                    value={data.medicineName}
                    autoComplete="family-name"
                    onChange={e => {
                      setOrderedMedicines(current => current.map((medicine, idx) => (index === idx ? { ...medicine, medicineName: e.target.value } : medicine)));
                    }}
                  />
                </span>
              </p>
              <p
                className="col-6"
                id="billing_last_name_field"
                data-priority="20"
              >
                <label htmlFor="billing_last_name" className="">
                  Medicine Description&nbsp;
                  <abbr className="required" title="required">
                    *
                  </abbr>
                </label>
                <span className="woocommerce-input-wrapper">
                  <input
                    type="text"
                    className="description"
                    name="medicine_description"
                    id="medicine_description"
                    placeholder="Medicine Description"
                    value={orderedMedices[index].medicineDescription}
                    autoComplete="family-name"
                    onChange={e => {
                      setOrderedMedicines(current => current.map((medicine, idx) => (index === idx ? { ...medicine, medicineDescription: e.target.value } : medicine)));
                    }}
                  />
                </span>
              </p>
              <p
                className="col-6"
                id="billing_last_name_field"
                data-priority="20"
              >
                <label htmlFor="billing_last_name" className="">
                  Prescription
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
                    value={orderedMedices[index].imageUrl}
                    onChange={async e => {
                      setIsUploadingImage(true);
                      await uploadMedicineImage(
                        e.target.files[0],
                        (err, uploadUrl) => {
                          setIsUploadingImage(false);
                          if (err) {
                            toast.error('Unable to upload image!');
                          } else {
                            setOrderedMedicines(current => current.map((medicine, idx) => (index === idx ? { imageUrl: e.target.value } : medicine)));
                          }
                        },
                      );
                    }}
                  />
                </span>
              </p>
              {
                orderedMedices.length > 1
              && (
              <p className="flex justify-content-end align-content-end col-6">
                <Button
                  text="REMOVE MEDICINE"
                  handleOnclick={() => setOrderedMedicines(current => current.filter((medicine, idx) => idx !== index))}
                />
              </p>
              )
                }
            </div>
          ))
        }

          <div className="px-3">
            <Button
              text="ADD MEDICINE"
              handleOnclick={() => {
                setOrderedMedicines(current => [...current, { imageUrl: '', medicineDescription: '', medicineName: '' }]);
              }}
            />
          </div>
        </>

      )
    }
              {
      formCurrentStep === 2 && (
        <div>
          <div>
            <h5 className="font-weight-bold">Personal Information Review</h5>
            <div className="flex flex-wrap gap-4">
              <div className="col-5">
                <span>
                  Telephone:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {phone}
                </span>
              </div>
              <div className="col-5">
                <span>
                  Email:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {email}
                </span>
              </div>
              <div className="col-5">
                <span>
                  Province:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {province}
                </span>
              </div>
              <div className="col-5">
                <span>
                  District:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {district}
                </span>
              </div>
              <div className="col-5">
                <span>
                  Sector:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {sector}
                </span>
              </div>
              {' '}
              <div className="col-5">
                <span>
                  Cell:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {cell}
                </span>
              </div>
              {' '}
              <div className="col-5">
                <span>
                  Village:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {village}
                </span>
              </div>
              <div className="col-5">
                <span>
                  Street number:
                </span>
                <span className="" style={{ fontWeight: 'bold' }}>
                  {' '}
                  {streetNumber}
                </span>
              </div>
            </div>
            <div className="ml-3">
              <Button text="Edit" handleOnclick={() => setFormCurrentStep(0)} />
            </div>
            <div>
              <h5 className="font-weight-bold">Medicines Information Review</h5>
              <div className="flex flex-wrap gap-4 flex-column px-3">
                {
                orderedMedices.map((medicine, index) => (
                  <div className="flex flex-col row">
                    <span className="col-12 font-weight-bold">
                      {index + 1}
                      {'. '}
                      {medicine.medicineName}
                    </span>
                    <p className="px-4">
                      {medicine.medicineDescription}
                    </p>
                  </div>
                ))
              }
              </div>

              <div className="ml-3">
                <Button text="Edit" handleOnclick={() => setFormCurrentStep(1)} />
              </div>
            </div>
          </div>
        </div>
      )
    }
            </form>
            <div className="col-12 flex justify-content-end gap-2 align-items-end">
              {formCurrentStep !== 2
                 && (
                 <>
                   {
                formCurrentStep > 0 && <Button text="Back" handleOnclick={() => setFormCurrentStep(cur => cur - 1)} />
              }
                   <Button
                     text="Next"
                     handleOnclick={() => {
                       if (formCurrentStep < 3) {
                         setFormCurrentStep(cur => cur + 1);
                       }
                     }}
                   />
                 </>
                 )}
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
                    {
                      formCurrentStep === 2
                    && <Button text="Place Order" handleOnclick={createOrderEvent} />
                    }
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
