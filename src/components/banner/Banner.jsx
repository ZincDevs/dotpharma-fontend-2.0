/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import key from 'uniqid';
import BannerItem from './items/Banner.item';

function Banner({ slides }) {
  return (
    <div className="banner-content banner">
      <div className="container d-flex">
        <div className="banner1 py-3 col-8">
          <div className="banner1-inner">
            <div className="banner-content-inner">
              <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                  {slides.map((item, i) => (<BannerItem key={key()} num={i} item={item} />))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          {/* <img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-slider-img-3.jpg" alt="image" /> */}
        </div>
        <div className="d-flex flex-column py-3 col-4 banner-bottom">
          <div className="banner2"><img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-banner-img-1.jpg" alt="image" /></div>
          <div className="banner3"><img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/H-2-banner-img-2.jpg" alt="image" /></div>
        </div>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  slides: [
    {
      content: 'Order medecine and other health care products with just one click 🤞',
    },
    {
      content: 'Order medecine and other health care products with just one click 🤞',
    },
    {
      content: 'Monitor your health by staying connected to your doctor anytime 😊',
    },
  ],
};

export default Banner;
