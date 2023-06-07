/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { createClinic, createInsurance } from '../../../../api/_clinics';
import { createClinicRedux } from '../../../../app/features/clinic/_clinicSlice';
import { getAllInsurance } from '../../../../app/features/clinic';
import FormSelectInput from '../../../shared/FromSelectControl';

function AddClinicInsurance({
  data: {
    isAddModalOpen, setIsAddModalOpen, getInsuranceClinic, cid,
  },
}) {
  const [insunceId, setInsuranceId] = useState('');
  const clinicInsurances = useSelector(state => state?.allInsurances);
  const axios = useAxiosPrivate();
  const loading = false;
  const dispatch = useDispatch();
  useEffect(() => {
    getAllInsurance(dispatch);
  }, []);

  console.log(clinicInsurances);

  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isAddModalOpen} onHide={() => setIsAddModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add insurance to clinic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="checkout_coupon woocommerce-form-coupon">
            <p
              className=" form-row-last validate-required"
              id="billing_last_name_field"
              data-priority="20"
            >
              <label htmlFor="billing_last_name" className="">
                Clinic insurance&nbsp;
                <abbr className="required" title="required">
                  *
                </abbr>
              </label>
              <span className="woocommerce-input-wrapper">
                <select
                  type="text"
                  className="input-text"
                  name="billing_last_name"
                  id="billing_last_name"
                  onChange={e => setInsuranceId(e.target.value)}
                >
                  <option value="">Choose insurance</option>
                  {clinicInsurances?.allInsurances?.map(insurance => (<option value={insurance.id}>{insurance.insurance_name}</option>))}
                </select>
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
                value="Add insurance"
                onClick={e => {
                  const data = {
                    c_id: cid,
                    i_id: insunceId,
                  };
                  createInsurance(axios, data, (err1, data) => {
                    if (err1) {
                      console.log(err1);
                      setIsAddModalOpen(false);
                      toast.error('Could not add insurance');
                    } else {
                      setIsAddModalOpen(false);
                      toast.success('Insurance successfully added!');
                      getInsuranceClinic(dispatch, cid);
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

export default AddClinicInsurance;
