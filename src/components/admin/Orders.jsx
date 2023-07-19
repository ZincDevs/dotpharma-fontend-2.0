/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
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
  // const { oid } = useParams();
  // const oid = searchParams.get('oid') || '';
  const query = new URLSearchParams(useLocation().search);

  const orders = useSelector(
    state => (query.get('oid') ? state?.order?.orders?.filter(order => order.o_id === query.get('oid')) : state?.order?.orders),
    shallowEqual,
  );
  const products = useSelector(
    state => state?.medicine?.medicinesHor,
    shallowEqual,
  );

  useEffect(() => {
    getOrders(dispatch, axios);
    getMedicinesHor(dispatch);
    getAllPatients(dispatch, axios);
  }, []);
  // console.log(products);
  const navigate = useNavigate();
  // console.log()
  // orders = orders?.filter(order => order.o_id === oid);
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
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="">Code</th>
                <th className="">Prescription</th>
                <th className="">Telephone</th>
                <th className="">Payment Amount</th>
                <th className="">Products</th>
                <th className="">Pharmacy</th>
                <th className="">Paid</th>
                <th className="">Payment reference</th>
                <th className="">Status</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(order => (
                <tr className="" key={order.o_id} onClick={() => setOrder(order)}>
                  <td className="">{order.o_referencecode}</td>

                  <td className="" style={{ minHeight: '15px' }}>
                    <a href={order.o_prescription ? order.o_prescription.includes('.pdf') ? `${order.o_prescription.replace('.pdf', '.jpg')}` : `${order.o_prescription}` : '#'} target="_blank" rel="noreferrer">Open prescription</a>
                  </td>

                  <td className="" style={{ wordBreak: 'break-all' }}>{(order?.o_address)?.split(',')[0]}</td>
                  {/* order.o_medicines[0] */}
                  <td className="" style={{ wordBreak: 'break-all' }}>{order.o_paymentamout}</td>
                  <td className="" style={{ wordBreak: 'break-all' }}>
                    {order?.o_medicines?.map(m => {
                      const ordereredProd = products?.filter(p => p.m_id === m);
                      return <p key={m}>{ordereredProd?.map(med => <span key={med.m_id}>{med.m_name}</span>)}</p>;
                    })}

                  </td>
                  <td className="" style={{ wordBreak: 'break-all' }}>{order.o_pharmacy ? order.o_pharmacy : 'N/A'}</td>
                  <td className="" style={{ wordBreak: 'break-all' }}>{order.o_paid ? 'YES' : 'NO'}</td>
                  <td className="" style={{ wordBreak: 'break-all' }}>{order.o_payment_ref}</td>
                  <td className="" style={{ wordBreak: 'break-all' }}>{order.o_status}</td>

                  <td className="">
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
                    {/* <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      Delete
                    </button> */}
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
