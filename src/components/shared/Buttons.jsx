/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { googleIcon } from '../../assets';

function Button({ text, icon, handleOnclick }) {
  return (
    <div className="py-2 w-auto">
      <button type="button" className="btn-1" onClick={handleOnclick}>
        <div className="w-100 py-2 px-3 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="px-1 d-flex justify-content-center align-items-center">
              {icon && (<i className={icon} />)}
              <span>
                {text}
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
function ButtonLink({ link, text, icon }) {
  return (
    <div className="py-2 w-auto">
      <Link to={link} className="btn-1">
        <div className="w-100 py-1 px-1 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="px-1 d-flex justify-content-center align-items-center">
              {icon && (<i className={icon} />)}
              <span>
                {text}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function FloatingButton({ text }) {
  return (
    <div className="qodef-woo-product-mark qodef-precent ">{text}</div>
  );
}

function GoogleBtn() {
  return (
    <div className="py-2 w-auto input-text-content">
      <Link to="*">
        <div className="w-100 py-2 px-3 google-btn d-flex justify-content-center align-items-center">
          <div>
            <img src={googleIcon} style={{ width: 30, height: 23 }} alt="google" />
            <span className="px-1">Continue with google</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export {
  Button,
  GoogleBtn,
  ButtonLink,
  FloatingButton,
};
