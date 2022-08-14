/* eslint-disable react/style-prop-object */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import { ToolBarTDP } from '../shared/Elements';
import { ButtonIcon } from '../shared/Buttons';
import useAuth from '../../hooks/useAuth';

export default function Header({ profile }) {
  const { auth } = useAuth();
  const isLoggenIn = !!auth?.access_token;
  const name = profile?.u_email?.split('@')[0];
  const cart = profile?.cart;

  console.log(auth);

  useEffect(() => {
    $(window).scroll(() => {
      const windowTop = $(window).scrollTop() + 1;
      if (windowTop > 150) {
        $('#nav-bar-header')
          .addClass('header-scrolled animated fadeInDown');
        $('#nav-menu-lists').addClass('nav-menu-lists-scrolled');
      } else {
        $('#nav-bar-header')
          .removeClass('header-scrolled animated fadeInDown');
        $('#nav-menu-lists').removeClass('nav-menu-lists-scrolled');
      }
    });
  }, []);
  const handleOpenMenu = () => {
    if ($('.nav-menu-lists')[0].classList.contains('open-menu')) {
      $('.nav-menu-lists')[0].classList.remove('open-menu');
      $('.nav-icon')[0].classList.remove('open-menu-btn');
    } else {
      $('.nav-menu-lists')[0].classList.add('open-menu');
      $('.nav-icon')[0].classList.add('open-menu-btn');
    }
  };
  return (
    <div className="header-content py-3">
      <div className="container">
        <div className="df py-3 py-md-2 d-flex flex-row justify-content-between align-items-center">
          <div className="logo d-flex justify-content-center align-items-center" href="#">
            <Logo with={40} height={40} />
            <h6>DOTPHARMA</h6>
          </div>
          <div className="menu-btn d-flex d-md-none justify-content-center align-items-center">
            <div onClick={handleOpenMenu} id="menu-btn-action" className="nav-icon">
              <span className="in-d" />
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex search">
              <div className="d-flex">
                <div>
                  <input
                    className="py-3 px-4"
                    placeholder="Search"
                  />
                </div>
                <div>
                  <ButtonIcon icon="bi bi-search" />
                </div>
              </div>
            </div>
            <div className="px-4">
              <ToolBarTDP
                link={isLoggenIn ? '/profile' : '/login'}
                icon="bi bi-person"
                title={isLoggenIn ? name : 'Account'}
                subtitle={isLoggenIn ? `@${name}` : 'Login / Signup'}
              />
            </div>
            <div className="px-4">
              <ToolBarTDP
                link={isLoggenIn ? '/cart' : '/login'}
                icon="bi bi-bag-check"
                title="Cart"
                subtitle="$0.00"
                count={cart?.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeaderTop() {
  return (
    <div className="d-flex header-top justify-content-center align-items-center py-2">
      <div className="d-flex justify-content-between container">
        <div className="d-flex small-gray-text">
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <i className="bi bi-dot" />
          </div>
          <div>
            <Link to="/">Delivery information</Link>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <span className="qodef-message-free-shipping text-center">– FREE SHIPPING FOR ORDERS OVER $30 –</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="small-gray-text">
            <Link to="/">info: +250 763 434</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ToolBar() {
  return (
    <div className="toolbar-container">
      <div className="container">
        <div className="d-flex justify-content-between links">
          <div>
            <ul className="d-flex">
              <li className="menu-bt">
                Home
              </li>
              <li className="menu-bt">
                Services
                {/* <div className="down-down-menu">
                  <span className="dropdown-menu-arrow" />
                  <div className="d-flex">
                    <span>Something</span>
                  </div>
                </div> */}
              </li>
              <li className="menu-bt">Shop</li>
              <li className="menu-bt">Blog</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center right">
            <Link to="/">Meet a doctor</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
