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
import { acceptOrder } from '../../../../api/_order';
import { acceptOrderRedux } from '../../../../app/features/order/_orderSlice';

function AcceptOrderModal({
  data: {
    isAcceptModalOpen, setIsAcceptModalOpen, o_id,
  },
}) {
  const axios = useAxiosPrivate();
  const loading = false;
  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />
      <Modal size="lg" show={isAcceptModalOpen} onHide={() => setIsAcceptModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Accept order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to accept this order</p>
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
                value="Accept order"
                onClick={e => {
                  acceptOrder(axios, o_id, (err, data) => {
                    if (err) {
                      toast.error('Could not accept order');
                    } else {
                      toast.success('Order successfully accepted!');
                      dispatch(acceptOrderRedux(o_id));
                      setIsAcceptModalOpen(false);
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

export default AcceptOrderModal;
