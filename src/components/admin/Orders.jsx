/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getOrders } from '../../app/features/order';
import { getMedicinesHor } from '../../app/features/medicine';
import { getAllPatients } from '../../app/features/patient';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import AcceptOrderModal from './components/order/AcceptOrderModal';
import DeleteOrderModal from './components/order/DeleteOrderModal';
import RejectOrderModal from './components/order/RejectOrderModal';
import UpdateOrderModal from './components/order/UpdateOrderModal';

function Orders() {
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [order, setOrder] = useState({});

  const orders = useSelector(
    state => state?.order?.orders,
    shallowEqual,
  );
  const products = useSelector(
    state => state?.medicine?.medicinesHor,
    shallowEqual,
  );

  useEffect(() => {
    getOrders(dispatch, axios);
    getMedicinesHor({ limit: 2, page: 2 }, dispatch);
    getAllPatients(dispatch, axios);
  }, []);
  // console.log(products);
  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer />
      <div className="card mb-grid">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="card-header-title">Manage orders</div>
          <form className="form-inline form-quicksearch d-none d-md-block mx-auto">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-icon">
                  <i data-feather="search" />
                </div>
              </div>
              <input
                type="text"
                className="form-control border-bottom"
                id="search"
                placeholder="Type to search..."
              />
            </div>
          </form>
          <button
            className="btn btn-sm btn-success disabled"
          >
            Add order
          </button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0 row container">
            <thead>
              <tr className="row">
                <th className="col-2 flex items-center justify-center">Code</th>
                <th className="col-1 flex items-center justify-center">Prescription</th>
                <th className="col-1 flex items-center justify-center">Telephone</th>
                <th className="col-1 flex items-center justify-center">Payment Amount</th>
                <th className="col-1 flex items-center justify-center">Products</th>
                <th className="col-1 flex items-center justify-center">Pharmacy</th>
                <th className="col-1 flex items-center justify-center">Paid</th>
                <th className="col-1 flex items-center justify-center">Status</th>
                <th className="col-3 flex items-center justify-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(order => (
                <tr className="row" key={order.o_id} onClick={() => setOrder(order)}>
                  <td className="col-2 flex items-center justify-center text-center">{order.o_referencecode}</td>

                  <td className="col-1 flex items-center justify-center text-center" style={{ minHeight: '15px' }}>
                    <a href={order.o_prescription ? `${order.o_prescription}` : '#'} target="_blank" rel="noreferrer">Link</a>
                  </td>

                  <td className="col-1 flex items-center justify-center text-center" style={{ wordBreak: 'break-all' }}>{(order.o_address).split(',')[0]}</td>
                  {/* order.o_medicines[0] */}
                  <td className="col-1 flex items-center justify-center text-center" style={{ wordBreak: 'break-all' }}>{order.o_paymentamout}</td>
                  <td className="col-1 flex items-center justify-center text-center" style={{ wordBreak: 'break-all' }}>
                    {order?.o_medicines.map(m => {
                      const ordereredProd = products?.filter(p => p.m_id === m);
                      return <p key={m}>{ordereredProd.map(med => <span key={med.m_id}>{med.m_name}</span>)}</p>;
                    })}

                  </td>
                  <td className="col-1 flex items-center justify-center text-center" style={{ wordBreak: 'break-all' }}>{order.o_pharmacy ? order.o_pharmacy : 'N/A'}</td>
                  <td className="col-1 flex items-center justify-center text-center" style={{ wordBreak: 'break-all' }}>{order.o_paid ? 'YES' : 'NO'}</td>
                  <td className="col-1 flex items-center justify-center text-center" style={{ wordBreak: 'break-all' }}>{order.o_status}</td>

                  <td className="flex gap-1 col-3 flex-row items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => setIsAcceptModalOpen(true)}
                    >
                      Accept
                    </button>
                    {' '}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => setIsRejectModalOpen(true)}
                    >
                      Reject
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add modal */}
      <AcceptOrderModal
        data={{
          isAcceptModalOpen, setIsAcceptModalOpen, o_id: order?.o_id,
        }}
      />
      {/* Reject modal */}
      <RejectOrderModal
        data={{
          isRejectModalOpen, setIsRejectModalOpen, o_id: order?.o_id,
        }}
      />

      {/* Edit modal */}
      <UpdateOrderModal data={{ order, isEditModalOpen, setIsEditModalOpen }} />

      {/* Delete modal */}
      <DeleteOrderModal
        data={{
          isDeleteModalOpen, setIsDeleteModalOpen, oid: order?.o_id,
        }}
      />
    </div>
  );
}

export default Orders;
