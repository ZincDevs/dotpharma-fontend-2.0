/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Logo from '../shared/Logo';
import { ToolBarTDP } from '../shared/Elements';
import { ButtonIcon } from '../shared/Buttons';
import useAuth from '../../hooks/useAuth';
import LogoOg from '../../assets/images/logoOg.png';
import CartMenu from '../Cart/CartMenu';
import { logout } from '../../app/features/user/_userSlice';
import { Constants } from '../../helpers';
import useLogout from '../../hooks/useLogout';

export function TopHeader() {
  return (
    <div id="qodef-top-area">
      <div id="qodef-top-area-inner" className="qodef-content-grid">
        <div className="qodef-widget-holder qodef-top-area-left">
          <div className="qodef-widget-holder qodef--one">
            <div
              id="text-3"
              className="widget widget_text qodef-top-bar-widget"
            >
              <div className="textwidget">
                <p>
                  <a className="qodef-top-header-link">
                    {' '}
                    Info : +250 790 696 369
                  </a>
                  <span className="qodef-separator-top-header" />
                  <Link to="/about" className="qodef-top-header-link">
                    {' '}
                    About
                  </Link>
                  <span className="qodef-separator-top-header" />
                  <Link
                    to="/delivery-information"
                    className="qodef-top-header-link"
                  >
                    {' '}
                    Delivery information
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-widget-holder qodef-top-area-center">
          <div className="qodef-widget-holder qodef--one">
            <div
              id="text-6"
              className="widget widget_text qodef-top-bar-widget"
            >
              <div className="textwidget">
                <p>
                  <span className="qodef-message-free-shipping">
                    - FREE SHIPPING FOR ORDERS OVER 30,0000 Rwf -
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-widget-holder qodef-top-area-right">
          <div className="qodef-widget-holder qodef--one">
            <div
              id="text-8"
              className="widget widget_text qodef-top-bar-widget"
            >
              <div className="textwidget">
                <p>
                  <Link to="/" className="qodef-top-header-link">
                    FAQ
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function LogoH() {
  return (
    <Link className="qodef-header-logo-link qodef-height--set" to="/">
      <img
        src={LogoOg}
        className="qodef-header-logo-image qodef--main"
        alt="logo main"
        itemProp="image"
        style={{ width: '230px' }}
      />
    </Link>
  );
}

export function ToolbarOne() {
  return (
    <div className="qodef-standard-header-bottom-wrapper force-main-color-bg">
      <div className="qodef-standard-header-bottom-inner qodef-content-grid ">
        <nav
          className="qodef-header-navigation"
          role="navigation"
          aria-label="Top Menu"
        >
          <ul id="menu-main-menu-1" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow">
              <Link to="/">
                <span className="qodef-menu-item-text">Home</span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow">
              <Link to="/dot-pharmacies">
                <span className="≈≈">Pharmacy</span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow">
              <Link to="/orders">
                <span className="qodef-menu-item-text">Order medicine</span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow">
              <Link to="/dot-clinics">
                <span className="qodef-menu-item-text">Book appointment</span>
              </Link>
            </li>
            {/* <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow">
              <Link to="/doctors">
                <span className="qodef-menu-item-text">Meet Specialist</span>
              </Link>
            </li> */}
            {/* <li
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow"
            >
              <Link to="/appointment">
                <span className="qodef-menu-item-text">
                  Book Appointment
                </span>
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="qodef-widget-holder">
          <div className="qodef-widget-holder qodef--two">
            <div
              id="text-2"
              className="widget widget_text qodef-header-widget-area-two"
              data-area="header-widget-two"
            >
              <div className="textwidget">
                <h6 className="qodef-ask-widget">
                  <a
                    href="https://wa.me/250790696369"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      style={{
                        color: '#ffffff',
                        fontSize: '15px',
                        letterSpacing: '0.15em',
                      }}
                    >
                      ORDER ON WHATSAPP
                      {' '}
                      <i className="bi bi-whatsapp" />
                    </span>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function HeaderContent({ profile }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setAuth } = useAuth();
  return (
    <header id="qodef-page-header">
      <div id="qodef-page-header-inner" className="">
        <div className="qodef-standard-header-top-wrapper qodef-content-grid ">
          <LogoH />
          <div className="qodef-widget-holder">
            <div className="qodef-widget-holder qodef--one">
              <div
                id="pharmacare_membership_login_opener-3"
                className="widget widget_pharmacare_membership_login_opener qodef-header-widget-area-one"
                data-area="header-widget-one"
              >
                <div className="qodef-login-opener-widget qodef-user-logged--out">
                  {!_.isEmpty(profile) ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        className="dropdowntex-header"
                        id="dropdown-basic"
                      >
                        <span className="qodef-m-opener-icon force-main-color">
                          <i className="bi bi-person" style={{ fontSize: '50px' }} />
                        </span>
                        <span className="qodef-login-text-holder">
                          <span className="qodef-login-opener-title">Account</span>
                          <br />
                          <span className="qodef-login-opener-text">
                            {profile.u_email?.slice(0, profile.u_email.indexOf('@'))}
                          </span>
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/"
                          onClick={() => useLogout(navigate, dispatch, setAuth)}
                        >
                          Logout

                        </Dropdown.Item>
                        <Dropdown.Item href="#/">My profile</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Link to="/login" className="qodef-login-opener">
                      <span className="qodef-m-opener-icon force-main-color">
                        <span className="qodef-icon-fontkiko kiko-user" />
                        <i
                          className="bi bi-person"
                          style={{ fontSize: '50px' }}
                        />
                      </span>
                      <span className="qodef-login-text-holder">
                        <span className="qodef-login-opener-title">
                          Account
                        </span>
                        <span className="qodef-login-opener-text">
                          Login/ Sign up
                        </span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
              <CartMenu profile={profile} />
            </div>
          </div>
        </div>
        <ToolbarOne />
      </div>
    </header>
  );
}

export default function Header({ profile }) {
  return (
    <div>
      {/* Top Header */}
      <TopHeader profile={profile} />
      {/* Header */}
      <HeaderContent profile={profile} />
    </div>
  );
}
