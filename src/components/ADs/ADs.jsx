/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import ad1Image from '../../assets/images/H-2-banner-img-3.jpeg';

export function ADsOne() {
  return (
    <div className="d-flex py-5 ads-1">
      <div className="container d-flex col-12">
        <img src={ad1Image} alt="ADs" />
        <div className="content m-4">
          <h4>Stay Safe.</h4>
          <h3 className="mb-2">Wear a mask!</h3>
          <Link to="/" className="mt-2">
            ABOUT-COVID-19
            <i className="bi bi-caret-right-fill" />
          </Link>
        </div>
      </div>
    </div>
  );
}
