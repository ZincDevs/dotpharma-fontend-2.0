/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Sidebar() {
  return (
    <div>
      {' '}
      <div className="adminx-sidebar expand-hover push">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <a href="index.html" className="sidebar-nav-link active">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-prescription-bottle-medical" />
              </span>
              <span className="sidebar-nav-name">
                Medicines
              </span>
              <span className="sidebar-nav-end" />
            </a>
          </li>

          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-nav-link">
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
            </a>
          </li>

          <li className="sidebar-nav-item">
            <a className="sidebar-nav-link collapsed" data-toggle="collapse" href="#example" aria-expanded="false" aria-controls="example">
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
            </a>
          </li>

          <li className="sidebar-nav-item">
            <a className="sidebar-nav-link collapsed" data-toggle="collapse" href="#navTables" aria-expanded="false" aria-controls="navTables">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-circle-h" />
              </span>
              <span className="sidebar-nav-name">
                Clinics
              </span>
              <span className="sidebar-nav-end">
                <i data-feather="chevron-right" className="nav-collapse-icon" />
              </span>
            </a>
          </li>

          <li className="sidebar-nav-item">
            <a className="sidebar-nav-link collapsed" data-toggle="collapse" href="#navForms" aria-expanded="false" aria-controls="navForms">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-house-chimney-medical" />
              </span>
              <span className="sidebar-nav-name">
                Pharmacies
              </span>
              <span className="sidebar-nav-end">
                <i data-feather="chevron-right" className="nav-collapse-icon" />
              </span>
            </a>
          </li>

          <li className="sidebar-nav-item">
            <a className="sidebar-nav-link collapsed" data-toggle="collapse" href="#navUI" aria-expanded="false" aria-controls="navUI">
              <span className="sidebar-nav-icon">
                <i className="fa-solid fa-users" />
              </span>
              <span className="sidebar-nav-name">
                UI Elements
              </span>
              <span className="sidebar-nav-end">
                <i data-feather="chevron-right" className="nav-collapse-icon" />
              </span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;
