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
import { getDoctors } from '../../app/features/doctors';
import AddDoctorModal from './components/doctor/AddDoctorModal';
import DeleteDoctorModal from './components/doctor/DeleteDoctorModal';
import UpdateDoctorModal from './components/doctor/UpdateDoctorModal';

function Doctors() {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [doctor, setDoctor] = useState({});

  const doctors = useSelector(
    state => state?.doctor?.doctors,
    shallowEqual,
  );

  useEffect(() => { getDoctors({ limit: 8 }, dispatch); }, []);

  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer />
      <div className="card mb-grid">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="card-header-title">Manage clinics</div>
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
            className="btn btn-sm btn-success"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add doctor
          </button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0 row container">
            <thead>
              <tr className="row">
                <th className="col-1 flex items-center justify-center">Image</th>
                <th className="col-1 flex items-center justify-center">Name</th>
                <th className="col-2 flex items-center justify-center">Specialized</th>
                <th className="col-2 flex items-center justify-center">Clinic</th>
                <th className="col-2 flex items-center justify-center">Email</th>
                <th className="col-2 flex items-center justify-center">Telephone</th>
                <th className="col-2 flex items-center justify-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map(doctor => (
                <tr className="row" key={doctor.d_id} onClick={() => setDoctor(doctor)}>
                  <td className="col-1 flex items-center justify-center">
                    <img
                      src={doctor.d_image}
                      alt="doctor"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="col-1 flex items-center justify-center">{doctor.d_name}</td>
                  <td className="col-2 flex items-center justify-center" style={{ minHeight: '15px' }}>
                    {doctor.d_speciality}
                  </td>
                  <td className="col-2 flex items-center justify-center">{doctor.d_clinic}</td>
                  <td className="col-2 flex items-center justify-center">{doctor.d_email}</td>
                  <td className="col-2 flex items-center justify-center">{doctor.d_phone}</td>
                  <td className="flex gap-1 col-2 flex-row items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => navigate(`/doctor/${doctor.d_id}`)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => setIsEditModalOpen(true)}
                    >
                      Edit
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
      <AddDoctorModal
        data={{
          isAddModalOpen, setIsAddModalOpen,
        }}
      />

      {/* Edit modal */}
      <UpdateDoctorModal data={{ doctor, isEditModalOpen, setIsEditModalOpen }} />

      {/* Delete modal */}
      <DeleteDoctorModal
        data={{
          isDeleteModalOpen, did: doctor?.d_id, setIsDeleteModalOpen, dispatch,
        }}
      />
    </div>
  );
}

export default Doctors;
