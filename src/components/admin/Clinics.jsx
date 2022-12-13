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
import { getClinics } from '../../app/features/clinic';
import AddClinicModal from './components/clinics/AddClinicModal';
import DeleteClinicModal from './components/clinics/DeleteClinicModal';
import UpdateClinicModal from './components/clinics/UpdateClinicModal';

function Clinics() {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clinic, setClinic] = useState({});

  const clinics = useSelector(
    state => state?.clinic?.clinics,
    shallowEqual,
  );

  useEffect(() => {
    getClinics(dispatch);
  }, []);

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
            Add clinic
          </button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0 row container">
            <thead>
              <tr className="row">
                <th className="col-1 flex items-center justify-center">Image</th>
                <th className="col-2 flex items-center justify-center">Name</th>
                <th className="col-2 flex items-center justify-center">Specialized</th>
                <th className="col-3 flex items-center justify-center">Email</th>
                <th className="col-2 flex items-center justify-center">Telephone</th>
                <th className="col-2 flex items-center justify-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {clinics?.map(clinic => (
                <tr className="row" key={clinic.c_id} onClick={() => setClinic(clinic)}>
                  <td className="col-1 flex items-center justify-center">
                    <img
                      src={clinic.c_logo}
                      alt="Clinic"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="col-2 flex items-center justify-center">{clinic.c_name}</td>
                  <td className="col-2 flex items-center justify-center" style={{ minHeight: '15px' }}>
                    {clinic.specialized}
                  </td>
                  <td className="col-3 flex items-center justify-center">{clinic.c_email}</td>
                  <td className="col-2 flex items-center justify-center">{clinic.c_phonenumber}</td>
                  <td className="flex gap-1 col-2 flex-row items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => navigate(`/clinic/${clinic.c_id}`)}
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
      <AddClinicModal
        data={{
          isAddModalOpen, setIsAddModalOpen,
        }}
      />

      {/* Edit modal */}
      <UpdateClinicModal data={{ clinic, isEditModalOpen, setIsEditModalOpen }} />

      {/* Delete modal */}
      <DeleteClinicModal
        data={{
          isDeleteModalOpen, cid: clinic?.c_id, setIsDeleteModalOpen, dispatch,
        }}
      />
    </div>
  );
}

export default Clinics;
