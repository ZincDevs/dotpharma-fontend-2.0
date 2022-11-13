/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import Form from 'react-bootstrap/Form';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import FormSelectInput from '../../../shared/FromSelectControl';
import { uploadMedicineImage } from '../../../../helpers';
import { updateMedicine } from '../../../../api/_medicine';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';

function EditMedicineModel({
  data: {
    isEditModalOpen, closeEditModal, medicine,
  },
}) {
  console.log(medicine?.m_name);
  const [name, setName] = useState(medicine?.m_name || 'jjjj');
  const [properties, setProperties] = useState(medicine?.m_properties || '');
  const [price, setPrice] = useState(medicine?.m_price || '');
  const [shortdescription, setShortDescription] = useState(medicine?.m_short_descripption || '');
  const [discount, setDiscount] = useState(medicine?.m_discoun || '');
  const [category, setCategory] = useState(medicine?.m_type || '');
  const [description, setDescription] = useState(medicine?.m_desciption || '');
  const axios = useAxiosPrivate();
  const loading = false;
  useEffect(() => {}, []);
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isEditModalOpen} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update medicine</Modal.Title>
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
                  onChange={e => setPrice(e.target.value)}
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
                  onChange={e => setDiscount(e.target.value)}
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
                    price,
                    shortdescription,
                    category,
                    discount,
                  };
                  updateMedicine(axios, data, medicine.m_id, (err, data) => {
                    if (err) {
                      toast.error('Could not update medicine');
                    } else {
                      toast.success('Medicine successfully updated!');
                      location.reload();
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
