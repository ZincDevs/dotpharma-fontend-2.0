/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getPharmacies } from '../../app/features/pharmacy';
import AddPharmacyModal from './components/pharmacy/AddPharmacy';
import DeletePharmacyModal from './components/pharmacy/DeletePharmacyModal';
import UpdatePharmacyModal from './components/pharmacy/UpdatePharmacyModal';

function Pharmacies() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pharmacy, setPharmacy] = useState({});
  const dispatch = useDispatch();

  const pharmacies = useSelector(
    state => state?.pharmacy?.pharmacies,
    shallowEqual,
  );

  useEffect(() => {
    getPharmacies(dispatch);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <ToastContainer />
      <div className="card mb-grid">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="card-header-title">Manage pharmacies</div>
          <form className="form-inline form-quicksearch d-none d-md-block mx-auto">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-icon">
                  <i data-feather="search" />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Type to search..."
              />
            </div>
          </form>
          <button
            className="btn btn-sm btn-success"
            onClick={() => setIsOpen(true)}
          >
            Add pharmacy
          </button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0">
            <thead>
              <tr>
                <th scope="col-1">Logo</th>
                <th scope="col-1">Name</th>
                <th scope="col-1">email</th>
                <th scope="col-1">phone number</th>
                <th scope="col-1">Orders</th>
                <th scope="col-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pharmacies?.map(pharmacy => (
                <tr onClick={() => setPharmacy(pharmacy)} key={pharmacy?.ph_id}>
                  <td >
                    <img
                      src={pharmacy.ph_logo}
                      alt="Medicine"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{pharmacy.ph_name}</td>
                  <td>
                    {pharmacy.ph_email}
                    1
                  </td>
                  <td>{pharmacy.ph_phone}</td>
                  <td>
                    <button className="btn btn-sm btn-success" >View</button>
                  </td>
                  <td>
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
      <AddPharmacyModal data={{
        modalIsOpen, closeModal,
      }}
      />

      {/* Edit modal */}
      <UpdatePharmacyModal data={{ pharmacy, isEditModalOpen, setIsEditModalOpen }} />

      {/* Delete modal */}
      <DeletePharmacyModal data={{ isDeleteModalOpen, phid: pharmacy.ph_id, closeDeleteModal }} />
    </div >
  );
}

export default Pharmacies;
