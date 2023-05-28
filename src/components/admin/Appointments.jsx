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
import { getAppointments } from '../../app/features/appointment';
import { getAllPatients } from '../../app/features/patient';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import AcceptAppointmentModal from './components/appointment/AcceptAppointmentModal';
import RejectAppointmentModal from './components/appointment/RejectAppointmentModal';
import { foundPatient, getDate } from './components/shared_functions/findPatient';

function Clinics() {
  const dispatch = useDispatch();
  const [isAcceptAppointmentModalOpen, setIsAcceptAppointmentModalOpen] = useState(false);
  const [isRejectAppointmentModalOpen, setIsRejectppointmentModalOpen] = useState(false);
  const [appointment, setAppointment] = useState({});
  const axios = useAxiosPrivate();

  const appointments = useSelector(
    state => state?.appointment?.appointments,
    shallowEqual,
  );
  const patients = useSelector(state => state?.patient?.allPatients);

  useEffect(() => {
    getAppointments({ limit: 8 }, dispatch, axios);
    getAllPatients(dispatch, axios);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer />
      <div className="card mb-grid">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="card-header-title">Manage appointments</div>
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
            onClick={() => setIsAcceptAppointmentModalOpen(true)}
          >
            Add appointment
          </button>
        </div>
        {/* table-responsive-md */}
        <div className="">
          <table className="table table-striped">
            <thead>
              <th className="">Patient Email</th>
              <th className="">Patient Telephone</th>
              <th className=" ">Disease</th>
              <th className="">Created At</th>
              <th className="">Start At</th>
              <th className="">Appointment Status</th>
              <th className="">Accept</th>
              <th className="">Reject</th>
            </thead>
            <tbody>
              {appointments?.map(appointment => (
                <tr className="" key={appointment.a_id} onClick={() => setAppointment(appointment)}>
                  <td className="" style={{ minHeight: '20px', wordBreak: 'break-all' }}>
                    {foundPatient(patients, appointment.p_id)?.p_email}
                  </td>
                  <td className="">
                    {foundPatient(patients, appointment.p_id)?.p_phonenumber}
                  </td>
                  <td className="" style={{ minHeight: '15px' }}>
                    {appointment.a_desease}
                  </td>
                  <td className="">{getDate(appointment.createdAt)}</td>
                  <td className="">{getDate(appointment.a_date)}</td>
                  <td className="">{appointment.a_status}</td>
                  <td className="">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => setIsAcceptAppointmentModalOpen(true)}
                      disabled={appointment.a_status === 'approved' || appointment.a_status === 'rejected'}
                    >
                      Accept
                    </button>
                  </td>
                  <td className="">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => setIsRejectppointmentModalOpen(true)}
                      disabled={appointment.a_status === 'approved' || appointment.a_status === 'rejected'}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Accept modal */}
      <AcceptAppointmentModal
        data={{
          isAcceptAppointmentModalOpen, setIsAcceptAppointmentModalOpen, a_id: appointment.a_id,
        }}
      />
      {/* Reject modal */}
      <RejectAppointmentModal
        data={{
          isRejectAppointmentModalOpen, setIsRejectppointmentModalOpen, a_id: appointment.a_id,
        }}
      />
    </div>
  );
}

export default Clinics;
