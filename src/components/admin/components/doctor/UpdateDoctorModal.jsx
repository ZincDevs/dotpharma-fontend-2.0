/* eslint-disable react/no-unescaped-entities */
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
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { updateClinicRedux } from '../../../../app/features/clinic/_clinicSlice';
import { updateClinic } from '../../../../api/_clinics';
import { updateDoctor } from '../../../../api/_doctor';
import { updateDoctorRedux } from '../../../../app/features/doctors/_doctorSlice';

function UpdateDoctorModal({
  data: {
    isEditModalOpen, setIsEditModalOpen, doctor,
  },
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [clinic, setClinic] = useState('');
  const axios = useAxiosPrivate();
  const [imageUrl, setImageUrl] = useState('');
  const loading = false;
  useEffect(() => {
    setName(doctor?.d_name);
    setPhone(doctor?.d_phone);
    setEmail(doctor?.d_email);
    setSpecialization(doctor?.d_speciality);
    setImageUrl(doctor?.d_image);
    setClinic(doctor?.d_clinic);
  }, [doctor]);
  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isEditModalOpen} onHide={() => setIsEditModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Doctor name&nbsp;
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
                Doctor's telephone&nbsp;
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
                Doctor's email&nbsp;
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
                Doctor's specialiality&nbsp;
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
                  value={specialization}
                  onChange={e => setSpecialization(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Doctor's clinic&nbsp;
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
                  value={clinic}
                  onChange={e => setClinic(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Doctor's image link&nbsp;
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
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
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
                value="Save doctor"
                dissable={isUploadingImage}
                onClick={e => {
                  const data = {
                    name,
                    email,
                    phone,
                    speciality: specialization,
                    clinic,
                    image: imageUrl,
                  };
                  updateDoctor(axios, doctor?.d_id, data, (err, data) => {
                    if (err) {
                      toast.error('Doctor failed to update. Consider provinding all data.');
                    } else {
                      toast.success('Doctor successfully updated!');
                      dispatch(
                        updateDoctorRedux({
                          ...doctor, d_name: name, d_email: email, speciality: specialization, d_phone: phone, d_image: imageUrl, d_clinic: clinic,
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

export default UpdateDoctorModal;
