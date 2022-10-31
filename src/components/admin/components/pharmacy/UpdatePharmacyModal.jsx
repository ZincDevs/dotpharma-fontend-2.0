/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { updatePharmacy } from '../../../../api/_pharmacies';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';

function EditPharmacyModal({
  data: {
    modalIsOpen, closeModal, pharmacy,
  },
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebSite] = useState('');
  const [address, setAddress] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const axios = useAxiosPrivate();
  const loading = false;

  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add pharmacy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Pharmacy name&nbsp;
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
                  placeholder="Pharmacy name"
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
                Pharmacy phone&nbsp;
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
                  placeholder="Pharmacy phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Pharmacy email&nbsp;
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
                  placeholder="Pharmacy email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Pharmacy website&nbsp;
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
                  placeholder="Pharmacy website"
                  value={website}
                  onChange={e => setWebSite(e.target.value)}
                />
              </span>
            </p>

            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Pharmacy address&nbsp;
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
                  placeholder="Pharmacy address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
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
                value="Save pharmacy"
                dissable={isUploadingImage}
                onClick={e => {
                  const data = {
                    name,
                    email,
                    phone,
                    website,
                    address,
                  };
                  updatePharmacy(axios, data, (err, data) => {
                    if (err) {
                      toast.error('Could not add pharmacy');
                    } else {
                      toast.success('Pharmacy successfully added!');
                      closeModal();
                      // getPharmacies(dispatch);
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

export default EditPharmacyModal;
