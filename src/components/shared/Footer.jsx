/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <div className="footer-container">
      <div id="qodef-page-footer-bottom-area">
        <div id="qodef-page-footer-bottom-area-inner" className="qodef-content-grid">
          <div className="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--3 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1">
            <div className="qodef-grid-inner clear">
              <div className="qodef-grid-item">
                <div id="pharmacare_core_social_icons_group-2" className="widget widget_pharmacare_core_social_icons_group" data-area="footer_bottom_area_column_1">
                  {' '}
                  <div className="logo-container">
                    <img src={logo} alt="Hello" width="30" height="30" />
                    {' '}
                    <span>Dotpharma</span>
                  </div>
                </div>
              </div>
              <div className="qodef-grid-item">
                <div id="text-12" className="widget widget_text" data-area="footer_bottom_area_column_2">
                  {' '}
                  <div className="textwidget">
                    <p className="qodef-copyright-text qodef-768-left qodef-768-margin-top">
                      ©
                      {' '}
                      {new Date().getFullYear()}
                      {' '}
                      <a href="#" target="_blank" rel="nofollow noopener noreferrer">Dotpharma</a>
                      , All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
              <div className="qodef-grid-item">
                <div id="text-13" className="widget widget_text" data-area="footer_bottom_area_column_3">
                  {' '}
                  <div className="textwidget">
                    <p className="qodef-copyright-text qodef-text-right qodef-768-left"><a href="https://pharmacare.qodeinteractive.com/contact/">Contact Us</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
