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
import { getMedicines } from '../../app/features/medicine';
import { getTags } from '../../app/features/tags';
import categories from '../../data/tipscategories.json';
import AddMedicineModal from './components/medicine/AddMedicineModal';
import DeleteMedicineModel from './components/medicine/DeleteMedicineModel';
import EditMedicineModel from './components/medicine/EditMedicineModel';
import AddHealthTipModal from './components/healthtip/AddHealthTipModal';
import DeleteHealthTipModal from './components/healthtip/DeleteHealthtipModel';

function HealthTipsManage() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [tip, setTip] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [page, setPage] = useState(1);

  const hTips = useSelector(state => state.healthTips?.healthtips, shallowEqual);
  console.log('Tips===================', hTips);
  useEffect(() => {
    getMedicines({ limit: itemsPerPage, page }, dispatch);
    getTags(dispatch);
  }, []);

  const handlePageClick = event => {
    setPage(Number(event.selected) + 1);
    getMedicines({ limit: itemsPerPage, page }, dispatch);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
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
          <div className="card-header-title">Manage health tips</div>
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
            Add health tip
          </button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped">
            <thead>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {(hTips instanceof Array) && hTips?.map(tip => (
                <tr key={tip.h_id}>
                  <td>
                    <img
                      src={tip.h_image}
                      alt="Medicine"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>
                    {tip.h_title}
                  </td>
                  <td>{tip.h_description}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        setTip(tip);
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
      <AddHealthTipModal
        data={{
          modalIsOpen,
          closeModal,
          categories,
        }}
      />

      {/* Delete modal */}
      <DeleteHealthTipModal
        data={{
          isDeleteModalOpen, hid: tip?.h_id, closeDeleteModal, dispatch,
        }}
      />
    </div>
  );
}

export default HealthTipsManage;
