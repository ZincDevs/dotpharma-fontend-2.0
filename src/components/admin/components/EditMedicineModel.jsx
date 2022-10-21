/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import Form from 'react-bootstrap/Form';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import FormSelectInput from '../../shared/FromSelectControl';
import { uploadMedicineImage } from '../../../helpers';
import { createMedicine } from '../../../api/_medicine';
import FormButtonSubmit from '../../shared/FormButtonSubmit';

function EditMedicineModel({
  data: {
    isEditModalOpen, closeEditModal, medicine,
  },
}) {
// show={modalIsOpen} onHide={closeModal}
/*

{m_id: 'd4d46667-ee05-446a-a6a7-a472769bb5ab', m_name: 'ccc',
m_properties: 'Danny', m_desciption: 'sdsss', m_image:
'http://res.cloudinary.com/dqpwqfbjf/image/upload/v…000514/dotpharma/productimages/slider3_zrkwa8.jpg',
…}createdAt: "2022-10-17T09:59:04.617Z"m_desciption: "sdsss"m_discount:
"883839"m_id: "d4d46667-ee05-446a-a6a7-a472769bb5ab"m_image:
"http://res.cloudinary.com/dqpwqfbjf/image/upload/v1666000514/dotpharma/productimages/slider3_zrkwa8.jpg"m_name: "ccc"m_price: "33434"m_properties: "Danny"m_short_descripption: "sdsds"m_status: "1"m_tags: (3)
['{"id":1,"name":"New products","createdAt":"2022-10…:57.430Z","updatedAt":"2022-10-16T07:16:57.430Z"}', '{"id":2,"name":"Popular","createdAt":"2022-10-16T0…:57.430Z","updatedAt":"2022-10-16T07:16:57.430Z"}',
'{"id":3,"name":"Promotion","createdAt":"2022-10-16…:57.430Z","updatedAt":"2022-10-16T07:16:57.430Z"}']
m_type: "Pain Killers"u_id: "480a86c4-446b-45a9-bf15-01493ee74d49"updatedAt: "2022-10-17T09:59:04.617Z"user:
 {u_id: '480a86c4-446b-45a9-bf15-01493ee74d49', u_email: 'ericprestein005@gmail.com', u_password:
  '$2b$10$Ov/uoUXyQXsCEC0/GdGltOU/c79ODa3Jl/Cqx9dazVisOOqF88Hg6',
 u_role: 'SUPER_ADMIN', verified: true,…}[[Prototype]]: Object
8DevTools failed to load source map: Could not load content for
 chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map:
 System error: net::ERR_FILE_NOT_FOUND

*/

  const [name, setName] = useState(medicine.m_name);
  const [properties, setProperties] = useState(medicine.m_properties);
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [shortdescription, setShortDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const axios = useAxiosPrivate();
  const loading = false;

  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isEditModalOpen} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine name&nbsp;
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
                  placeholder="Medicine name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine properties&nbsp;
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
                  placeholder="Medicine properties"
                  value={properties}
                  onChange={e => setProperties(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Short decription&nbsp;
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
                  placeholder="Ex, medicine for malaria"
                  autoComplete="family-name"
                  value={shortdescription}
                  onChange={e => setShortDescription(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Full description&nbsp;
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
                  placeholder="Ex, It is a good cure for malaria..."
                  autoComplete="family-name"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine price&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="number"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Enter prince"
                  autoComplete="family-name"
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Discount&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <input
                  type="number"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Enter discount"
                  autoComplete="family-name"
                  value={discount}
                  onChange={e => setDiscount(Number(e.target.value))}
                />
              </span>
            </p>

          </form>
        </Modal.Body>
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
                value="Save medicine"
                onClick={e => {
                  const data = {
                    name,
                    properties,
                    description,
                    image,
                    price,
                    shortdescription,
                    category,
                    discount,
                  };
                  createMedicine(axios, data, (err, data) => {
                    if (err) {
                      console.log(err);
                      toast.error('Could not add medicine');
                    } else {
                      toast.success('Medicine successfully added!');
                    }
                  });
                }}
              />
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditMedicineModel;
