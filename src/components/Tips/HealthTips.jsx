/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable import/first */
/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import tesmonies from '../../data/tips';
import TipItem from './TipItem';

export default class Tips extends Component {
  componentDidMount() {
    window.$('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        300: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  render() {
    return (
      <section className="ftco-section testimony-section my-5 py-5">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 mt-5 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Health Tips</span>
              <h3 className="mb-3 mt-5">We wish you to be healthy  😊</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                {tesmonies.map((item, i) => (
                  <TipItem
                    key={`key_${i}`}
                    icon={item.icon}
                    iconStyle={item.iconStyle}
                    message={item.message}
                    author={item.author}
                    flexCenter
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
