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
import { deleteHealthTips, getHealthTips } from '../../../../api';
import FormButtonSubmit from '../../../shared/FormButtonSubmit';
import { getHealthTips as getHtips } from '../../../../app/features/healthtips';

function DeleteHealthTipModal({
  data: {
    isDeleteModalOpen, closeDeleteModal, hid, dispatch,
  },
}) {
  const axios = useAxiosPrivate();
  const loading = false;
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isDeleteModalOpen} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete health tip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this health tip?</p>
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
                value="Delete health tip"
                onClick={e => {
                  deleteHealthTips(axios, hid, (err, data) => {
                    if (err) {
                      closeDeleteModal();
                      toast.error('Could not delete health tips');
                    } else {
                      closeDeleteModal();
                      getHtips(dispatch);
                      toast.success('Health tip deleted!');
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

export default DeleteHealthTipModal;
