/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMedicinesHor } from '../../app/features/medicine';
import { getTags } from '../../app/features/tags';
import categories from '../../data/categories.json';
import AddMedicineModal from './components/medicine/AddMedicineModal';
import DeleteMedicineModel from './components/medicine/DeleteMedicineModel';
import EditMedicineModel from './components/medicine/EditMedicineModel';

function Clinics() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [medicine, setMedicine] = useState(null);

  const products = useSelector(
    state => state?.medicine?.medicinesHor,
    shallowEqual,
  );
  const tags = useSelector(state => state?.tag?.tags, shallowEqual);

  useEffect(() => {
    getMedicinesHor({ limit: 2, page: 2 }, dispatch);
    getTags(dispatch);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  function handleOpenEditModal(medicine1) {
    setMedicine(medicine1);
    setTimeout(() => setIsEditModalOpen(true), 50);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }
  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer />
      <div className="card mb-grid">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="card-header-title">Manage medicines</div>
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
            onClick={() => setIsOpen(true)}
          >
            Add medicine
          </button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0 row container">
            <thead>
              <tr className="row">
                <th className="col-1">Image</th>
                <th className="col-2">Name</th>
                <th className="col-6">Description</th>
                <th className="col-1">Price</th>
                <th className="col-1">Product</th>
                <th className="col-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map(product => (
                <tr className="row" key={product.m_id}>
                  <td className="col-1">
                    <img
                      src={product.m_image}
                      alt="Medicine"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="col-2">{product.m_name}</td>
                  <td className="col-6" style={{ minHeight: '15px' }}>
                    {product.m_desciption}
                  </td>
                  <td className="col-1">{product.m_price}</td>
                  <td className="col-1 flex items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => navigate(`/product/${product.m_id}`)}
                    >
                      View
                    </button>
                  </td>
                  <td className="flex gap-1 col-1 flex-row items-center justify-center">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleOpenEditModal(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        setMedicine(product);
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
      <AddMedicineModal
        data={{
          modalIsOpen,
          closeModal,
          categories,
          tags,
        }}
      />

      {/* Edit modal */}
      <EditMedicineModel data={{ medicine, isEditModalOpen, closeEditModal }} />

      {/* Delete modal */}
      <DeleteMedicineModel
        data={{
          isDeleteModalOpen, mid: medicine?.m_id, closeDeleteModal, dispatch,
        }}
      />
    </div>
  );
}

export default Clinics;
