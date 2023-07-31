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
import { createHealthTip } from '../../../../api';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { getMedicinesHor } from '../../../../app/features/medicine';
import { getHealthTips } from '../../../../app/features/healthtips';

function AddHealthTipModal({
  data: {
    modalIsOpen, closeModal, categories,
  },
}) {
  /*
  {
"category":"Mental health",
"title":"Get better in think",
"content":"aslkdjsajdo,sij",
"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJDauFe_WM-3a-vGolDKMxnYjpGpUR1c2JTeSKkOK0SRDbo8EmvcvoH-FuQ8GJop3wsQ&usqp=CAU"
}
  */
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const axios = useAxiosPrivate();
  const loading = false;
  const dispatch = useDispatch();

  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add health tip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Title&nbsp;
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
                  placeholder="Health tip title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Healthtip content&nbsp;
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
                  placeholder="Health tip content"
                  autoComplete="family-name"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />
              </span>
            </p>

            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Category&nbsp;
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
                Health tip image&nbsp;
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
                          console.log(err);
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
                    title,
                    content,
                    category,
                    image,
                  };

                  createHealthTip(axios, data, (err, data) => {
                    if (err) {
                      console.log(err);
                      toast.error('Could not add helthtip');
                    } else {
                      toast.success('Medicine successfully added!');
                      getHealthTips(dispatch);
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

export default AddHealthTipModal;
