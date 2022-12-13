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
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0 row container">
            <thead>
              <tr className="row">
                <th className="col-2 flex items-center justify-center text-center">Patient Email</th>
                <th className="col-1 flex items-center justify-center text-center">Patient Telephone</th>
                <th className="col-3 flex items-center justify-center">Disease</th>
                <th className="col-1 flex items-center justify-center">Created At</th>
                <th className="col-1 flex items-center justify-center">Start At</th>
                <th className="col-1 flex items-center justify-center text-center">Appointment Status</th>
                <th className="col-1 flex items-center justify-center">Accept</th>
                <th className="col-1 flex items-center justify-center">Reject</th>
                <th className="col-1 flex items-center justify-center">View</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map(appointment => (
                <tr className="row" key={appointment.a_id} onClick={() => setAppointment(appointment)}>
                  <td className="col-2 flex items-center justify-center" style={{ minHeight: '20px', wordBreak: 'break-all' }}>
                    {foundPatient(patients, appointment.p_id)?.p_email}
                  </td>
                  <td className="col-1 flex items-center justify-center">
                    {foundPatient(patients, appointment.p_id)?.p_phonenumber}
                  </td>
                  <td className="col-3 flex items-center justify-center" style={{ minHeight: '15px' }}>
                    {appointment.a_desease}
                  </td>
                  <td className="col-1 flex items-center justify-center text-center">{getDate(appointment.createdAt)}</td>
                  <td className="col-1 flex items-center justify-center text-center">{getDate(appointment.a_date)}</td>
                  <td className="col-1 flex items-center justify-center text-center">{appointment.a_status}</td>
                  <td className="col-1 flex items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => setIsAcceptAppointmentModalOpen(true)}
                    >
                      Accept
                    </button>
                  </td>
                  <td className="col-1 flex items-center justify-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => setIsRejectppointmentModalOpen(true)}
                    >
                      Reject
                    </button>
                  </td>
                  <td className="flex gap-1 col-1 flex-row items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => navigate(`/appointment/${appointment.a_id}`)}
                    >
                      View
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
