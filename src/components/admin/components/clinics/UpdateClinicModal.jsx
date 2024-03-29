/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { updateClinicRedux } from '../../../../app/features/clinic/_clinicSlice';
import { updateClinic } from '../../../../api/_clinics';
import FormSelectInput from '../../../shared/FromSelectControl';
import { uploadMedicineImage } from '../../../../helpers';

function UpdateClinicModal({
  data: {
    isEditModalOpen, setIsEditModalOpen, clinic,
  },
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialized, setSpecialization] = useState('');
  const [logo, setLogo] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const axios = useAxiosPrivate();
  const loading = false;
  useEffect(() => {
    setName(clinic?.c_name);
    setPhone(clinic?.c_phonenumber);
    setEmail(clinic?.c_email);
    setSpecialization(clinic?.specialized);
    setLogo(clinic?.c_logo);
  }, [clinic]);
  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isEditModalOpen} onHide={() => setIsEditModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update clinic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Clinic name&nbsp;
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
                Clinic phone&nbsp;
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
                Clinic email&nbsp;
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
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Clinic specialization&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <FormSelectInput
                  options={['Choose category', 'OPHTHALMOLOGY', 'CARDIOLOGY', 'STOMATOLOGY', 'RADIOLOGY', 'INTERNAL MEDICINE']}
                  placeholder="Select category"
                  onChange={e => setSpecialization(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Clinic logo&nbsp;
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
                          setLogo(uploadUrl);
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
                value="Save clinic"
                dissable={isUploadingImage}
                onClick={e => {
                  const data = {
                    name,
                    email,
                    phone,
                    specialized,
                    logo,
                  };
                  updateClinic(axios, clinic?.c_id, data, (err, data) => {
                    if (err) {
                      toast.error('Clinic failed to update. Consider provinding all data.');
                    } else {
                      toast.success('Clinic successfully updated!');
                      dispatch(
                        updateClinicRedux({
                          ...clinic, c_name: name, c_email: email, specialized, c_phonenumber: phone, c_logo: logo,
                        }),
                      );
                      setIsEditModalOpen(false);
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

export default UpdateClinicModal;
