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
import { getOneMedicine } from '../../app/features/medicine';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { addToCart, removeCart } from '../../api/index';
import { getMyProfile } from '../../app/features/user';

function ViewProduct() {
  const medicine = useSelector(state => state.medicine.medicine);
  const { pid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getOneMedicine(pid, dispatch);
  }, []);

  const axios = useAxiosPrivate();
  const [showAlert, setShowAlert] = useState(true);
  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  const handleAddToCart = () => {
    // changeStatus('pending');
    addToCart(axios, pid, err => {
      if (err) {
        // changeStatus('fail');
        toast.error('Could not add to cart, please sign in first!');
      } else {
        setTimeout(() => {
        //   changeStatus('success');
          toast.success('Added to cart successfully!');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };

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
                      <span class="qodef-woo-product-mark qodef-woo-onsale qodef-precent">-20%</span>
                      <span class="qodef-woo-product-mark qodef-new">New</span>
                      <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images qodef-position--below" data-columns="5">
                        <figure class="woocommerce-product-gallery__wrapper">
                          <div data-thumb="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/02/product13-fetaured-600x461.jpg" data-thumb-alt="a" class="woocommerce-product-gallery__image img-div-container-gallery">
                            <img width="800" height="614" src={medicine?.m_image} class="wp-post-image" alt="a" loading="lazy" title="product13-fetaured" data-caption="" sizes="(max-width: 800px) 100vw, 800px" />
                          </div>

                          {' '}

                        </figure>
                      </div>
                    </div>
                    <div class="summary entry-summary">
                      <h3 class="qodef-woo-product-title product_title entry-title">{medicine?.m_name}</h3>
                      <p class="price">
                        {/* <del aria-hidden="true">
                          <span class="woocommerce-Price-amount amount">
                            <bdi>
                              <span class="woocommerce-Price-currencySymbol">$</span>
                              40.00
                            </bdi>
                          </span>
                        </del> */}
                        {' '}
                        <ins>
                          <span class="woocommerce-Price-amount amount">
                            <bdi>
                              <span class="woocommerce-Price-currencySymbol">RWF</span>
                              {medicine?.m_price}
                            </bdi>
                          </span>
                        </ins>
                      </p>
                      <div class="woocommerce-product-details__short-description">
                        <p>{medicine?.m_desciption}</p>
                      </div>
                      <div class="cart">
                        <button class="single_add_to_cart_button button alt" onClick={() => handleAddToCart()}>Add to cart</button>
                      </div>
                      <div class="yith-wcwl-add-to-wishlist add-to-wishlist-3211  wishlist-fragment on-first-load" data-fragment-ref="3211" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:3211,&quot;parent_product_id&quot;:3211,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ViewProduct;
