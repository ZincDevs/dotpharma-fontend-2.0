/* eslint-disable camelcase */
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
import { rejectOrder } from '../../../../api/_order';
import { rejectOrderRedux } from '../../../../app/features/order/_orderSlice';

function RejectOrderModal({
  data: {
    isRejectModalOpen, setIsRejectModalOpen, o_id,
  },
}) {
  const axios = useAxiosPrivate();
  const loading = false;
  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isRejectModalOpen} onHide={() => setIsRejectModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reject order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to reject this order</p>
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
                value="Reject order"
                onClick={e => {
                  rejectOrder(axios, o_id, (err, data) => {
                    if (err) {
                      toast.error('Could not reject order');
                    } else {
                      toast.success('Order successfully rejected!');
                      dispatch(rejectOrderRedux(o_id));
                      setIsRejectModalOpen(false);
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

export default RejectOrderModal;
