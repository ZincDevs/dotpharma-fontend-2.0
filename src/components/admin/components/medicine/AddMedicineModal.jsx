/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import Form from 'react-bootstrap/Form';
import { useDispatch, shallowEqual } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import FormSelectInput from '../../../shared/FromSelectControl';
import { uploadMedicineImage } from '../../../../helpers';
import { createMedicine } from '../../../../api/_medicine';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { getMedicinesHor } from '../../../../app/features/medicine';

function AddMedicineModal({
  data: {
    modalIsOpen, closeModal, categories, tags,
  },
}) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [name, setName] = useState('');
  const [properties, setProperties] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [shortdescription, setShortDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const axios = useAxiosPrivate();
  const loading = false;
  const dispatch = useDispatch();

  const handleTagCheck = (tag, checked) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      selectedTags.splice(selectedTags.indexOf(tag), 1);
      setSelectedTags(selectedTags);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={modalIsOpen} onHide={closeModal}>
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
                Medicine category&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <FormSelectInput
                  options={categories}
                  placeholder="Select category"
                  onChange={e => setCategory(e.target.value)}
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
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Medicine image&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <br />
              <span className="woocommerce-input-wrapper">
                <input
                  type="file"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  placeholder="Enter discount"
                  autoComplete="family-name"
                  onChange={async e => {
                    setIsUploadingImage(true);
                    toast.info('Uploading image...!');
                    await uploadMedicineImage(
                      e.target.files[0],
                      (err, uploadUrl) => {
                        setIsUploadingImage(false);
                        if (err) {
                          toast.error('Unable to upload image!');
                        } else {
                          setImage(uploadUrl);
                        }
                      },
                    );
                  }}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Select tags&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <div className="form-group mb-0">
                  {tags?.map(tag => (
                    <div key={tag.id} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        isValid
                        onChange={e => handleTagCheck(tag.name, e.target.checked)}
                        label={tag.name}
                      />

                    </div>
                  ))}
                </div>
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
                dissable={isUploadingImage}
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
                    tags,
                  };

                  createMedicine(axios, data, (err, data) => {
                    if (err) {
                      toast.error('Could not add medicine');
                    } else {
                      toast.success('Medicine successfully added!');
                      getMedicinesHor({ limit: 2, page: 2 }, dispatch);
                      closeModal();
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

export default AddMedicineModal;
