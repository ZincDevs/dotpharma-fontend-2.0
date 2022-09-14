/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import key from 'uniqid';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { ProductPlaceholder } from '../shared/Placeholder';
// import ProductItem, { ProductItemHor } from '../shared/ProductItem';
// import ProductItemHor from '../shared/ProductItemHor';
import { getDoctors } from '../../app/features/doctors';
import DoctorItem from './DoctorItem';

const ProductItem = React.lazy(() => import('../shared/ProductItem'));
const ProductItemHor = React.lazy(() => import('../shared/ProductItemHor'));

export default function Doctors({
  handleAddToCart,
  handleRemoveFromCart,
  profile,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctors = useSelector(state => state?.doctor?.doctors, shallowEqual);

  useEffect(() => { getDoctors({ limit: 8 }, dispatch); }, []);

  return (
    <div className="doctors-list">
      <div className="qodef-shortcode qodef-m qodef-woo-shortcode qodef-woo-product-list qodef-item-layout--info-right qodef-content-increased--no qodef-grid qodef-layout--columns qodef-gutter--small qodef-col-num--2 qodef-item-layout--info-right qodef-filter--on qodef--no-bottom-space qodef-pagination--off qodef-responsive--custom qodef-col-num--1440--2 qodef-col-num--1366--2 qodef-col-num--1024--1 qodef-col-num--768--1 qodef-col-num--680--1 qodef-col-num--480--1" data-options="{&quot;plugin&quot;:&quot;pharmacare_core&quot;,&quot;module&quot;:&quot;plugins\/woocommerce\/shortcodes&quot;,&quot;shortcode&quot;:&quot;product-list&quot;,&quot;post_type&quot;:&quot;product&quot;,&quot;next_page&quot;:&quot;2&quot;,&quot;max_pages_num&quot;:5,&quot;behavior&quot;:&quot;columns&quot;,&quot;images_proportion&quot;:&quot;full&quot;,&quot;columns&quot;:&quot;2&quot;,&quot;columns_responsive&quot;:&quot;custom&quot;,&quot;columns_1440&quot;:&quot;2&quot;,&quot;columns_1366&quot;:&quot;2&quot;,&quot;columns_1024&quot;:&quot;1&quot;,&quot;columns_768&quot;:&quot;1&quot;,&quot;columns_680&quot;:&quot;1&quot;,&quot;columns_480&quot;:&quot;1&quot;,&quot;space&quot;:&quot;small&quot;,&quot;posts_per_page&quot;:&quot;4&quot;,&quot;orderby&quot;:&quot;date&quot;,&quot;order&quot;:&quot;ASC&quot;,&quot;additional_params&quot;:&quot;tax&quot;,&quot;tax&quot;:&quot;product_cat&quot;,&quot;tax_slug&quot;:&quot;allergies&quot;,&quot;layout&quot;:&quot;info-right&quot;,&quot;title_tag&quot;:&quot;h5&quot;,&quot;enable_filter&quot;:&quot;yes&quot;,&quot;pagination_type&quot;:&quot;no-pagination&quot;,&quot;increase_content&quot;:&quot;no&quot;,&quot;enable_excerpt&quot;:&quot;no&quot;,&quot;object_class_name&quot;:&quot;PharmaCareCore_Product_List_Shortcode&quot;,&quot;taxonomy_filter&quot;:&quot;product_cat&quot;,&quot;additional_query_args&quot;:{&quot;tax_query&quot;:[{&quot;taxonomy&quot;:&quot;product_cat&quot;,&quot;field&quot;:&quot;slug&quot;,&quot;terms&quot;:&quot;allergies&quot;}]},&quot;space_value&quot;:10}">
        {/* <div className="qodef-m-filter">
          <div className="qodef-m-filter-items">
            <a className="qodef-m-filter-item qodef--active" href="#" data-taxonomy="product_cat" data-filter="*">
              <span className="qodef-m-filter-item-name">Show All</span>
            </a>
            <a className="qodef-m-filter-item" href="#" data-taxonomy="product_cat" data-filter="cold-fever">
              <span className="qodef-m-filter-item-name">Cold &amp; Fever</span>
            </a>
            <a className="qodef-m-filter-item" href="#" data-taxonomy="product_cat" data-filter="dry-eyes-alergies">
              <span className="qodef-m-filter-item-name">Dry Eyes</span>
            </a>
            <a className="qodef-m-filter-item" href="#" data-taxonomy="product_cat" data-filter="nutrition-alergies">
              <span className="qodef-m-filter-item-name">Nutrition</span>
            </a>
            <a className="qodef-m-filter-item" href="#" data-taxonomy="product_cat" data-filter="probiotics-alergies">
              <span className="qodef-m-filter-item-name">Probiotics</span>
            </a>
            <a className="qodef-m-filter-item" href="#" data-taxonomy="product_cat" data-filter="skincare">
              <span className="qodef-m-filter-item-name">Skincare</span>
            </a>
            <a className="qodef-m-filter-item" href="#" data-taxonomy="product_cat" data-filter="vitamins">
              <span className="qodef-m-filter-item-name">Vitamins</span>
            </a>
          </div>
        </div> */}
        <div className="qodef-grid-inner clear">
          {doctors?.map(doctor => (<DoctorItem doctor={doctor} />))}
        </div>
      </div>

    </div>
  );
}