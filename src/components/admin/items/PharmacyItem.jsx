/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function PharmacyItem({ pharmacy }) {
  return (
    <tbody>
      <tr>
        <td>
          <img
            src={pharmacy.ph_logo}
            alt="Medicine"
            width={50}
            height={50}
          />
        </td>
        <td>{pharmacy.ph_name}</td>
        <td>{pharmacy.ph_email}</td>
        <td>{pharmacy.ph_phone}</td>
        <td>
          {' '}
          <button className="btn btn-sm btn-success">View</button>
          {' '}
        </td>
        <td>
          <button className="btn btn-sm btn-success">Edit</button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              // setMedicine(product);
              // setIsDeleteModalOpen(true);
            }}
          >
            Delete

          </button>
        </td>
      </tr>
      {/* Edit modal */}
      {/* <EditMedicineModel data={{ medicine, isEditModalOpen, closeEditModal }} /> */}

      {/* Delete modal */}
      {/* <DeleteMedicineModel data={{ isDeleteModalOpen, mid: medicine.m_id, closeDeleteModal }} /> */}
    </tbody>
  );
}

export default PharmacyItem;
