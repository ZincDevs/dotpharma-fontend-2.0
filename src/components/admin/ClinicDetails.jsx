/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import { setClinicInsurances } from '../../app/features/clinic/_clinicSlice';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { addToCart, removeCart } from '../../api/index';
import { getMyProfile } from '../../app/features/user';
import { getClinicInsurance } from '../../app/features/clinic';
import AddClinicInsurance from './components/clinics/AddClinicInsurance';

function ClinicDetails() {
  const clinic = useSelector(state => state.singleClinic?.singleClinic);
  const clinicInsurances = useSelector(state => state.clinicInsurances);

  const axios = useAxiosPrivate();
  const [showAlert, setShowAlert] = useState(true);
  const dispatch = useDispatch();
  const { clinicid } = useParams();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    getClinicInsurance(dispatch, clinicid);
  }, []);

  // const handleAddToCart = () => {
  //   // changeStatus('pending');
  //   if (_.some(profile?.cart, cartItem => cartItem.m_id === clinicid)) {
  //     toast.warning('Product is already added!');
  //     return;
  //   }
  //   addToCart(axios, clinicid, err => {
  //     if (err) {
  //       // changeStatus('fail');
  //       toast.error('Could not add to cart, please sign in first!');
  //     } else {
  //       setTimeout(() => {
  //       //   changeStatus('success');
  //         toast.success('Added to cart successfully!');
  //         getMyProfile(dispatch, axios);
  //       }, 2000);
  //     }
  //   });
  // };

  /*
  {
    "c_id": "bfcad59f-3b0e-4f62-924e-25b15ae0d877",
    "c_name": "Kigali Optic",
    "c_logo": "https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png",
    "c_email": "admin@admin.com",
    "c_phonenumber": "0788521343",
    "specialized": "RADIOLOGY",
    "createdAt": "2022-11-18T08:20:45.737Z",
    "updatedAt": "2023-04-23T11:35:25.862Z"
}
  */

  return (
    <div>
      <ToastContainer />
      <div id="qodef-page-inner" className="qodef-content-grid">
        <main
          id="qodef-page-content"
          className="qodef-grid qodef-layout--template qodef--no-bottom-space "
        >
          <div className="qodef-grid-inner clear">
            <div
              id="qodef-woo-page"
              className="qodef-grid-item qodef--single qodef-popup--magnific-popup qodef-magnific-popup qodef-popup-gallery"
            >
              <div className="woocommerce-notices-wrapper">
                <div
                  id="product-3211"
                  className="new product type-product post-3211 status-publish first instock product_cat-medicine product_tag-drugs has-post-thumbnail sale shipping-taxable purchasable product-type-simple"
                >
                  {/* Problem */}

                  <div class="qodef-woo-single-inner">
                    <div class="qodef-woo-single-image">
                      <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images qodef-position--below" data-columns="5">
                        <figure class="woocommerce-product-gallery__wrapper">
                          <div data-thumb="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/02/product13-fetaured-600x461.jpg" data-thumb-alt="a" class="woocommerce-product-gallery__image img-div-container-gallery">
                            <img width="800" height="614" src={clinic?.c_logo} class="wp-post-image" alt="a" loading="lazy" title="product13-fetaured" data-caption="" sizes="(max-width: 800px) 100vw, 800px" />
                          </div>

                        </figure>
                      </div>
                    </div>
                    <div class="summary entry-summary">
                      <h3 class="qodef-woo-product-title product_title entry-title">{clinic?.c_name}</h3>
                      <div class="woocommerce-product-details__short-description">
                        <p>
                          {clinic?.specialized}
                        </p>
                        <p>{clinic?.c_email}</p>
                        <p>{clinic?.c_phonenumber}</p>
                      </div>
                      <br />
                      <h3 class="qodef-woo-product-title product_title entry-title">Insurances</h3>
                      <div class="woocommerce-product-details__short-description insurance-contaier">
                        {clinicInsurances?.clinicInsurances?.map(ins => (
                          <p>
                            {ins?.insurance_name}
                          </p>
                        ))}
                        <div class="cart">
                          <button
                            class="single_add_to_cart_button button alt"
                            onClick={() => {
                              setIsAddModalOpen(true);
                            }}
                          >
                            Add insurance

                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <AddClinicInsurance data={{
        isAddModalOpen, cid: clinicid, setIsAddModalOpen, dispatch, getInsuranceClinic: getClinicInsurance,
      }}
      />
    </div>
  );
}

export default ClinicDetails;
