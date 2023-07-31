/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import key from 'uniqid';
import Carousel from 'react-bootstrap/Carousel';
import BannerItem from './items/Banner.item';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';
import slider4 from '../../assets/images/slider4.jpg';
import slideSmall1 from '../../assets/images/slide-small-1.jpg';
import slideSmall2 from '../../assets/images/slide-small-2.jpg';
import slideSmall3 from '../../assets/images/slide-small-3.jpg';

function Banner({ slides }) {
  const [index, setIndex] = useState(0);
  const [indexSmall, setIndexSmall] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelectSmall = (selectedIndex, e) => {
    setIndexSmall(selectedIndex);
  };
  const hTips = useSelector(state => state.healthTips?.healthtips);
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-9262bb8 elementor-section-full_width qodef-elementor-content-grid elementor-section-height-default elementor-section-height-default"
      data-id="9262bb8"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-08907b6"
            data-id="08907b6"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-1547d0e elementor-widget elementor-widget-pharmacare_core_fixed_background_slider"
                  data-id="1547d0e"
                  data-element_type="widget"
                  data-widget_type="pharmacare_core_fixed_background_slider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m  qodef-fixed-background-slider swiper-container-horizontal">
                      <div className="qodef-m-items clear qodef-swiper--initialized">
                        <div className="qodef-m-swiper swiper-container-fade swiper-container-initialized swiper-container-horizontal">

                          <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={slider4}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={slider3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-632ec9f"
            data-id="632ec9f"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-858b55d qodef-custom-responsive-banner-margin elementor-widget elementor-widget-pharmacare_core_banner"
                  data-id="858b55d"
                  data-element_type="widget"
                  data-widget_type="pharmacare_core_banner.default"
                >
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m qodef-mobile-custom-margin-80 qodef-banner qodef-layout--link-button qodef-banner--light ">
                      <div className="qodef-m-image">
                        <Carousel activeIndex={indexSmall} onSelect={handleSelectSmall}>
                          {hTips ? hTips?.map(tip => (
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={tip?.h_image}
                                alt="First slide"
                              />
                            </Carousel.Item>
                          )) : (
                            <Carousel.Item>
                            Loading
                            </Carousel.Item>
                          )}

                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-31a8497 elementor-widget elementor-widget-pharmacare_core_banner"
                  data-id="31a8497"
                  data-element_type="widget"
                  data-widget_type="pharmacare_core_banner.default"
                >
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m  qodef-banner qodef-layout--link-overlay  ">
                      <div className="qodef-m-image">
                        <img
                          src={slider2}
                          className="attachment-full size-full"
                          alt="a"
                          loading="lazy"
                          sizes="(max-width: 824px) 100vw, 824px"
                          width="824"
                          height="600"
                        />
                      </div>
                      <div className="qodef-m-content">
                        <div className="qodef-m-content-inner" />
                      </div>
                      <a
                        itemProp="url"
                        href="https://wa.me/250790696369"
                        className="qodef-m-banner-link"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function Banner({ slides }) {
//   return (
//     <div className="banner-content">
//       <div className="container d-flex">
//         <div className="bann-1 py-3 col-8">
//           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
//               <li data-target="#carouselExampleIndicators" data-slide-to="1" />
//               <li data-target="#carouselExampleIndicators" data-slide-to="2" />
//             </ol>
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img className="d-block w-100" src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-slider-img-3.jpg" alt="First slide" />
//               </div>
//               <div className="carousel-item">
//                 <img className="d-block w-100" src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-slider-img-3.jpg" alt="Second slide" />
//               </div>
//               <div className="carousel-item">
//                 <img className="d-block w-100" src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-slider-img-3.jpg" alt="Third slide" />
//               </div>
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true" />
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true" />
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//           {/* <div className="banner1-inner">
//             <div className="banner-content-inner">
//               <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
//                 <div className="carousel-indicators">
//                   <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
//                   <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
//                   <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
//                 </div>
//                 <div className="carousel-inner">
//                   {slides.map((item, i) => (<BannerItem key={key()} num={i} item={item} />))}
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//                   <span className="carousel-control-prev-icon" aria-hidden="true" />
//                   <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//                   <span className="carousel-control-next-icon" aria-hidden="true" />
//                   <span className="visually-hidden">Next</span>
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           {/* <img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-slider-img-3.jpg" alt="image" /> */}
//         </div>
//         <div className="d-flex flex-column py-3 col-4 banner-bottom">
//           <div className="bann-2"><img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/04/H-2-banner-img-1.jpg" alt="image" /></div>
//           <div className="bann-3"><img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/03/H-2-banner-img-2.jpg" alt="image" /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

Banner.defaultProps = {
  slides: [
    {
      content:
        'Order medecine and other health care products with just one click 🤞',
    },
    {
      content:
        'Order medecine and other health care products with just one click 🤞',
    },
    {
      content:
        'Monitor your health by staying connected to your doctor anytime 😊',
    },
  ],
};

export default Banner;
