/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../assets/css/admin/adminx.css';
import LogoOg from '../../assets/images/logoOg.png';
import Sidebar from './components/Sidebar';

function Admin() {
  const navigate = useNavigate();
  return (
    <div className="adminx-container">
      <nav className="navbar navbar-expand justify-content-between fixed-top">
        <span className="navbar-brand mb-0 h1 d-none d-md-block" onClick={() => navigate('/')}>
          <img
            src={LogoOg}
            className="qodef-header-logo-image qodef--main"
            alt="logo main"
            itemProp="image"
            style={{ width: '230px' }}
          />
        </span>

        <div className="d-flex flex-1 d-block d-md-none">
          <a href="#" className="sidebar-toggle ml-3">
            <i data-feather="menu" />
          </a>
        </div>

        <ul className="navbar-nav d-flex justify-content-end mr-2">
          <li className="nav-item dropdown">
            <a className="nav-link avatar-with-name" id="navbarDropdownMenuLink" data-toggle="dropdown" href="#">
              <i className="fa-solid fa-arrow-right-from-bracket fa-2xl" />
            </a>
          </li>
        </ul>
      </nav>
      {/* Sidebar component */}
      <Sidebar />
      <div className="adminx-content">
        <div className="adminx-main-content">
          <div className="container-fluid">
            <div className="pb-3">
              <h1>Dashboard</h1>
            </div>
            <div className="row">
              <div className="col">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
