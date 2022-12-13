/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { deleteMedicine } from '../../../../api/_medicine';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { removeMedicine } from '../../../../app/features/medicine/_medicineSlice';

function DeleteMedicineModel({
  data: {
    isDeleteModalOpen, closeDeleteModal, mid, dispatch,
  },
}) {
  const axios = useAxiosPrivate();
  const loading = false;
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isDeleteModalOpen} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this medicine</p>
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
                value="Delete medicine"
                onClick={e => {
                  deleteMedicine(axios, mid, (err, data) => {
                    if (err) {
                      closeDeleteModal();
                      toast.error('Could not delete medicine');
                    } else {
                      closeDeleteModal();
                      dispatch(removeMedicine(mid));
                      toast.success('Medicine successfully deleted!');
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

export default DeleteMedicineModel;
