/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerItem({ num, item: { content } }) {
  return (
    <div className={`carousel-item ${num === 0 && 'active'}`}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="carousel-captions text-start d-flex align-items-center">
          <div className="d-flex flex-column">
            <h3 className="d-none d-sm-flex">
              Welcome to
              <strong>Dotpharma</strong>
            </h3>
            <div className="col-12 col-md-10">
              <h1>
                {content}
              </h1>
            </div>
            <div className="d-flex d-md-block justify-content-center">
              <Link to="/signup" className="btn-1 py-3 px-4">
                Join Dotpharma
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
