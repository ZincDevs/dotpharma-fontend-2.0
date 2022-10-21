/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      {' '}
      <div className="adminx-sidebar expand-hover push">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <Link to="medicines" className="sidebar-nav-link active">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-prescription-bottle-medical" />
              </span>
              <span className="sidebar-nav-name">
                Medicines
              </span>
              <span className="sidebar-nav-end" />
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <Link to="appointments" className="sidebar-nav-link">
              <span className="sidebar-nav-icon">
                {/* <i class="fa-solid fa-hospital"></i> */}
                <i className="fa-solid fa-hospital" />
              </span>
              <span className="sidebar-nav-name">
                Appointments
              </span>
              <span className="sidebar-nav-end">
                <span className="badge badge-info">4</span>
              </span>
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <Link className="sidebar-nav-link collapsed" data-toggle="collapse" to="orders" aria-expanded="false" aria-controls="example">
              <span className="sidebar-nav-icon">
                {/* <i class="fa-solid fa-cart-shopping"></i> */}
                <i className="fa-solid fa-cart-shopping" />
              </span>
              <span className="sidebar-nav-name">
                Orders
              </span>
              <span className="sidebar-nav-end">
                <i data-feather="chevron-right" className="nav-collapse-icon" />
              </span>
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <Link className="sidebar-nav-link collapsed" data-toggle="collapse" to="clinics" aria-expanded="false" aria-controls="navTables">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-circle-h" />
              </span>
              <span className="sidebar-nav-name">
                Clinics
              </span>
              <span className="sidebar-nav-end">
                <i data-feather="chevron-right" className="nav-collapse-icon" />
              </span>
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <Link className="sidebar-nav-link collapsed" data-toggle="collapse" to="pharmacies" aria-expanded="false" aria-controls="navForms">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-house-chimney-medical" />
              </span>
              <span className="sidebar-nav-name">
                Pharmacies
              </span>
              <span className="sidebar-nav-end">
                <i data-feather="chevron-right" className="nav-collapse-icon" />
              </span>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;
