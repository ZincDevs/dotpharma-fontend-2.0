/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import LogoOg from '../../assets/images/logoOg.png';
import { mobileNavs } from '../../helpers/navs';

function MobileMenu({ handleCloneMobileMenu, profile }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setAuth } = useAuth();
  console.log('User profile====>', profile);
  useEffect(() => {
    if (!_.isEmpty(profile)) {
      const navItem = {
        label: 'Logout',
        link: '/',
      };
      mobileNavs.splice(mobileNavs.length - 1, 1);
      mobileNavs.push(navItem);
    }
  }, []);
  return (
    <div className="mobile-menu">
      <a className="qodef-opener-icon qodef-m qodef-source--predefined qodef-m-close">
        <span className="qodef-m-icon qodef--open">
          <img
            src={LogoOg}
            className="qodef-header-logo-image qodef--main"
            alt="logo main"
            itemProp="image"
            style={{ width: '230px' }}
          />
        </span>
      </a>

      <nav
        className="qodef-m-navigation"
        role="navigation"
        aria-label="Mobile Menu"
      >
        <ul
          id="menu-main-menu-3"
          className="menu"
          onClick={() => handleCloneMobileMenu()}
        >
          {/* target="_blank"
                    rel="noreferrer" */}
          {mobileNavs.map((nav, index) => {
            if (index === 5) {
              return (
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6777">
                  <Link to={nav.link} target="_blank" rel="noreferrer">
                    <span className="qodef-menu-item-text">
                      {nav.label}
                      {' '}
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </Link>
                </li>
              );
            }
            return (
              <li
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6777"
                onClick={
                  nav.label === 'Logout'
                    ? () => useLogout(navigate, dispatch, setAuth)
                    : null
                }
              >
                <Link to={nav.link}>
                  <span className="qodef-menu-item-text">
                    {nav.label}
                    {' '}
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {' '}
      </nav>

      <div className="ps__rail-x" style={{ left: '0px;', bottom: '0px;' }}>
        <div
          className="ps__thumb-x"
          tabIndex="0"
          style={{ left: '0px; bottom: 0px;' }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: '0px;', right: '0px;' }}>
        <div
          className="ps__thumb-y"
          tabIndex="0"
          style={{ left: '0px; bottom: 0px;' }}
        />
      </div>
    </div>
  );
}

function HeaderMobile({ logo, profile }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <header id="qodef-page-mobile-header">
        <div id="qodef-page-mobile-header-inner" className="">
          <a
            itemProp="url"
            className="qodef-mobile-header-logo-link"
            href="#"
            style={{ height: '47px' }}
          >
            <img
              width="196"
              height="36"
              src={logo}
              className="qodef-header-logo-image qodef--main"
              alt="logo main"
              itemProp="image"
            />
            {' '}
          </a>
          <a
            className="qodef-opener-icon qodef-m qodef-source--predefined qodef-side-area-mobile-header-opener"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <span className="qodef-m-icon qodef--open">
              <span className="qodef-m-lines">
                <span className="qodef-m-line qodef--1" />
                <span className="qodef-m-line qodef--2" />
              </span>
              {' '}
            </span>
          </a>
          {openMenu ? (
            <MobileMenu
              handleCloneMobileMenu={() => setOpenMenu(false)}
              profile={profile}
            />
          ) : (
            ''
          )}
        </div>
      </header>
    </div>
  );
}

export default HeaderMobile;
