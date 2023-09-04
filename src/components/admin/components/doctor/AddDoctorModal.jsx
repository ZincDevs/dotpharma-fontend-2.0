/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { uploadMedicineImage } from '../../../../helpers';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { createClinic } from '../../../../api/_clinics';
import { createClinicRedux } from '../../../../app/features/clinic/_clinicSlice';
import { createDoctor } from '../../../../api/_doctor';
import { createDoctorRedux } from '../../../../app/features/doctors/_doctorSlice';
import FormSelectInput from '../../../shared/FromSelectControl';

function AddDoctorModal({
  data: {
    isAddModalOpen, setIsAddModalOpen,
  },
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [specialized, setSpecialized] = useState('');
  const [clinic, setClinic] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const axios = useAxiosPrivate();
  const loading = false;

  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isAddModalOpen} onHide={() => setIsAddModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Doctor</Modal.Title>
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
                  placeholder="Doctor name"
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
                Telephone&nbsp;
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
                  placeholder="Doctor's phone number"
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
                Doctor email&nbsp;
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
                  placeholder="Doctor's email"
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
                Speciality&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <FormSelectInput
                  options={[
                    'Allergy and immunology',
                    'Anesthesiology',
                    'Dermatology',
                    'Diagnostic radiology',
                    'Emergency medicine',
                    'Family medicine',
                    'Internal medicine',
                    'Medical genetics',
                    'Neurology',
                    'Nuclear medicine',
                    'Obstetrics and gynecology',
                    'Ophthalmology',
                    'Pathology',
                    'Pediatrics',
                    'Physical medicine and rehabilitation',
                    'Preventive medicine',
                    'Psychiatry',
                    'Radiation oncology',
                    'Surgery',
                    'Urology',
                    'Pharmacist',
                  ]}
                  placeholder="Select category"
                  onChange={e => setSpecialized(e.target.value)}
                />
              </span>
            </p>
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Clinic&nbsp;
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
                  placeholder="Doctor's clinic ex: King Faisal"
                  value={clinic}
                  onChange={e => setClinic(e.target.value)}
                />
              </span>
            </p>
            <p
              className="form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Doctor's image&nbsp;
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
                          setImageUrl(uploadUrl);
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
                value="Save doctor"
                dissable={isUploadingImage}
                onClick={e => {
                  const data = {
                    dname: name,
                    demail: email,
                    dphone: phone,
                    dimage: imageUrl,
                    speciality: specialized,
                    clinic,
                  };
                  createDoctor(axios, data, (err, data) => {
                    if (err) {
                      toast.error('Could not add doctor. Check your data and try again!');
                    } else {
                      toast.success('Doctor successfully added!');
                      dispatch(createDoctorRedux(data));
                      setIsAddModalOpen(false);
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

export default AddDoctorModal;
