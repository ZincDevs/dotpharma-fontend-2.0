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
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import { ToolBarTDP } from '../shared/Elements';
import { ButtonIcon } from '../shared/Buttons';
import useAuth from '../../hooks/useAuth';
import LogoOg from '../../assets/images/logoOg.png';
import CartMenu from '../Cart/CartMenu';

export function TopHeader() {
  return (
    <div id="qodef-top-area">
      <div id="qodef-top-area-inner" className="qodef-content-grid">
        <div className="qodef-widget-holder qodef-top-area-left">
          <div className="qodef-widget-holder qodef--one">
            <div id="text-3" className="widget widget_text qodef-top-bar-widget">
              <div className="textwidget">
                <p>
                  <a className="qodef-top-header-link"> Info : +250 788 625 375</a>
                  <span
                    className="qodef-separator-top-header"
                  />
                  <Link to="/about" className="qodef-top-header-link"> About</Link>
                  <span
                    className="qodef-separator-top-header"
                  />
                  <Link to="/delivery-information" className="qodef-top-header-link"> Delivery information</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-widget-holder qodef-top-area-center">
          <div className="qodef-widget-holder qodef--one">
            <div id="text-6" className="widget widget_text qodef-top-bar-widget">
              <div className="textwidget">
                <p><span className="qodef-message-free-shipping">– FREE SHIPPING FOR ORDERS OVER $30 –</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-widget-holder qodef-top-area-right">
          <div className="qodef-widget-holder qodef--one">
            <div id="text-8" className="widget widget_text qodef-top-bar-widget">
              <div className="textwidget">
                <p>
                  <Link to="/" className="qodef-top-header-link">FAQ</Link>
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
    <Link
      className="qodef-header-logo-link qodef-height--set"
      to="/"
    >
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
        <nav className="qodef-header-navigation" role="navigation" aria-label="Top Menu">
          <ul id="menu-main-menu-1" className="menu">
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow"
            >
              <Link to="/">
                <span className="qodef-menu-item-text">
                  Home
                </span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow"
            >
              <Link to="/pharmacy">
                <span className="≈≈">
                  Pharmacy
                </span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow"
            >
              <Link to="/orders">
                <span className="qodef-menu-item-text">
                  Order medicine
                </span>
              </Link>
            </li>
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-221 qodef--hide-link qodef-menu-item--narrow"
            >
              <Link to="/doctors">
                <span className="qodef-menu-item-text">
                  Meet Specialist
                </span>
              </Link>
            </li>
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
            <div id="text-2" className="widget widget_text qodef-header-widget-area-two" data-area="header-widget-two">
              <div className="textwidget">
                <h6 className="qodef-ask-widget">
                  <a href="https://wa.me/250790696369" target="_blank" rel="noreferrer">
                    <span
                      style={{ color: '#ffffff', fontSize: '15px', letterSpacing: '0.15em' }}
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
  return (
    <header id="qodef-page-header">
      <div id="qodef-page-header-inner" className="">
        <div className="qodef-standard-header-top-wrapper qodef-content-grid ">
          <LogoH />
          <div className="qodef-widget-holder">
            <div className="qodef-widget-holder qodef--one">
              <div
                id="search-3"
                className="widget widget_search qodef-header-widget-area-one"
                data-area="header-widget-one"
              >
                <form
                  role="search"
                  method="get"
                  className="qodef-search-form"
                  action="https://pharmacare.qodeinteractive.com/"
                >
                  <label htmlFor="qodef-search-form-62fab3ca55ba5" className="screen-reader-text">Search for:</label>
                  <div className="qodef-search-form-inner clear">
                    <input
                      type="search"
                      id="qodef-search-form-62fab3ca55ba5"
                      className="qodef-search-form-field"
                      value=""
                      name="s"
                      placeholder="Search"
                    />
                    <button type="submit" className="qodef-search-form-button force-main-color-bg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g>
                          <g>
                            <path
                              d="M31.707,30.293l-8.846-8.846a13.039,13.039,0,1,0-1.414,1.414l8.846,8.846a1,1,0,0,0,1.414-1.414ZM2,13A11,11,0,1,1,13,24,11.013,11.013,0,0,1,2,13Zm4,1a1,1,0,0,1-1-1,8.008,8.008,0,0,1,.185-1.715,1,1,0,1,1,1.953.426A6.108,6.108,0,0,0,7,13,1,1,0,0,1,6,14ZM8.3,8.813a1,1,0,0,1-.672-1.742A7.983,7.983,0,0,1,13,5a1,1,0,0,1,0,2A5.982,5.982,0,0,0,8.972,8.554,1,1,0,0,1,8.3,8.813Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div
                id="pharmacare_membership_login_opener-3"
                className="widget widget_pharmacare_membership_login_opener qodef-header-widget-area-one"
                data-area="header-widget-one"
              >
                <div className="qodef-login-opener-widget qodef-user-logged--out">
                  <Link to="/login" className="qodef-login-opener">
                    <span className="qodef-m-opener-icon force-main-color">
                      <span className="qodef-icon-fontkiko kiko-user" />
                      <i className="bi bi-person" style={{ fontSize: '50px' }} />
                    </span>
                    <span className="qodef-login-text-holder">
                      <span className="qodef-login-opener-title">Account</span>
                      <span className="qodef-login-opener-text">
                        Login / Register

                      </span>
                    </span>
                  </Link>
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

// export default function Header({ profile }) {
//   const { auth } = useAuth();
//   const isLoggenIn = !!auth?.access_token;
//   const name = profile?.u_email?.split('@')[0];
//   const cart = profile?.cart;

//   console.log(auth);

//   useEffect(() => {
//     $(window).scroll(() => {
//       const windowTop = $(window).scrollTop() + 1;
//       if (windowTop > 150) {
//         $('#nav-bar-header')
//           .addClass('header-scrolled animated fadeInDown');
//         $('#nav-menu-lists').addClass('nav-menu-lists-scrolled');
//       } else {
//         $('#nav-bar-header')
//           .removeClass('header-scrolled animated fadeInDown');
//         $('#nav-menu-lists').removeClass('nav-menu-lists-scrolled');
//       }
//     });
//   }, []);
//   const handleOpenMenu = () => {
//     if ($('.nav-menu-lists')[0].classList.contains('open-menu')) {
//       $('.nav-menu-lists')[0].classList.remove('open-menu');
//       $('.nav-icon')[0].classList.remove('open-menu-btn');
//     } else {
//       $('.nav-menu-lists')[0].classList.add('open-menu');
//       $('.nav-icon')[0].classList.add('open-menu-btn');
//     }
//   };
//   return (
//     <div className="header-content py-3">
//       <div className="container">
//         <div className="df py-3 py-md-2 d-flex flex-row justify-content-between align-items-center">
//           <div className="logo d-flex justify-content-center align-items-center" href="#">
//             <Logo with={40} height={40} />
//             <h6>DOTPHARMA</h6>
//           </div>
//           <div className="menu-btn d-flex d-md-none justify-content-center align-items-center">
//             <div onClick={handleOpenMenu} id="menu-btn-action" className="nav-icon">
//               <span className="in-d" />
//             </div>
//           </div>
//           <div className="d-flex">
//             <div className="d-flex search">
//               <div className="d-flex">
//                 <div>
//                   <input
//                     className="py-3 px-4"
//                     placeholder="Search"
//                   />
//                 </div>
//                 <div>
//                   <ButtonIcon icon="bi bi-search" />
//                 </div>
//               </div>
//             </div>
//             <div className="px-4">
//               <ToolBarTDP
//                 link={isLoggenIn ? '/profile' : '/login'}
//                 icon="bi bi-person"
//                 title={isLoggenIn ? name : 'Account'}
//                 subtitle={isLoggenIn ? `@${name}` : 'Login / Signup'}
//               />
//             </div>
//             <div className="px-4">
//               <ToolBarTDP
//                 link={isLoggenIn ? '/cart' : '/login'}
//                 icon="bi bi-bag-check"
//                 title="Cart"
//                 subtitle="$0.00"
//                 count={cart?.length}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function HeaderTop() {
//   return (
//     <div className="d-flex header-top justify-content-center align-items-center py-2">
//       <div className="d-flex justify-content-between container">
//         <div className="d-flex small-gray-text">
//           <div>
//             <Link to="/">About</Link>
//           </div>
//           <div>
//             <i className="bi bi-dot" />
//           </div>
//           <div>
//             <Link to="/">Delivery information</Link>
//           </div>
//         </div>
//         <div className="d-flex justify-content-center align-items-center">
//           <div>
//             <span className="qodef-message-free-shipping text-center">– FREE SHIPPING FOR ORDERS OVER $30 –</span>
//           </div>
//         </div>
//         <div className="d-flex">
//           <div className="small-gray-text">
//             <Link to="/">info: +250 763 434</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function ToolBar() {
//   return (
//     <div className="toolbar-container">
//       <div className="container">
//         <div className="d-flex justify-content-between links">
//           <div>
//             <ul className="d-flex">
//               <li className="menu-bt">
//                 Home
//               </li>
//               <li className="menu-bt">
//                 Services
//                 {/* <div className="down-down-menu">
//                   <span className="dropdown-menu-arrow" />
//                   <div className="d-flex">
//                     <span>Something</span>
//                   </div>
//                 </div> */}
//               </li>
//               <li className="menu-bt">Shop</li>
//               <li className="menu-bt">Blog</li>
//             </ul>
//           </div>
//           <div className="d-flex justify-content-center align-items-center right">
//             <Link to="/">Meet a doctor</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
