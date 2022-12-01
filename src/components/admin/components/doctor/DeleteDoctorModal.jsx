/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { deleteClinic } from '../../../../api/_clinics';
import { deleteClinicRedux } from '../../../../app/features/clinic/_clinicSlice';
import { deleteDoctor } from '../../../../api/_doctor';
import { deleteDoctorRedux } from '../../../../app/features/doctors/_doctorSlice';

function DeleteDoctorModal({
  data: {
    isDeleteModalOpen, setIsDeleteModalOpen, did,
  },
}) {
  const axios = useAxiosPrivate();
  const loading = false;
  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this doctor</p>
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
                value="Delete doctor"
                onClick={e => {
                  deleteDoctor(axios, did, (err, data) => {
                    if (err) {
                      toast.error('Could not delete doctor. Try providing all information');
                    } else {
                      toast.success('Doctor successfully deleted!');
                      dispatch(deleteDoctorRedux(did));
                      setIsDeleteModalOpen(false);
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

export default DeleteDoctorModal;
