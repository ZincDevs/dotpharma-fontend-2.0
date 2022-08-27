/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../header/Header';
import { getMyProfile } from '../../app/features/user';
import Alert from '../shared/Alert';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import ProductsHome, { ProductsHomeHor } from '../products/ProductsHome';
import HealthTips from '../Tips/HealthTips';
import { ADsOne } from '../ADs/ADs';
import { addToCart, removeCart } from '../../api/index';

function Home({ alert: defaultAlert }) {
  const dispatch = useDispatch();
  const axios = useAxiosPrivate();
  const [alert, setAlert] = useState(defaultAlert);
  const [showAlert, setShowAlert] = useState(true);

  const profile = useSelector(state => state?.user?.MyProfile, shallowEqual);
  console.log(profile, 'Hello there');

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleShowAlert = data => {
    setAlert(data || defaultAlert);
    setShowAlert(true);
  };

  const handleAddToCart = (m_id, changeStatus) => {
    // const m_id = e.target?.id;
    changeStatus('pending');
    console.log(m_id);
    addToCart(axios, m_id, err => {
      if (err) {
        changeStatus('fail');
        toast.error('Could not add to cart!');
      } else {
        setTimeout(() => {
          changeStatus('success');
          toast.success('Added to cart successfully!');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };
  const handleRemoveFromCart = (e, changeStatus) => {
    const c_id = e.target?.id;
    changeStatus('pending');
    removeCart(axios, c_id, err => {
      if (err) {
        changeStatus('fail');
      } else {
        setTimeout(() => {
          changeStatus('success');
          toast.success('Removed from cart successfully!');
          getMyProfile(dispatch, axios);
        }, 2000);
      }
    });
  };

  useEffect(() => {
    getMyProfile(dispatch, axios);
  }, []);
  return (
    <div className="">
      <ToastContainer />
      {(showAlert && alert) && (<Alert info={alert} handleCloseAlert={handleCloseAlert} />)}
      <div id="qodef-page-wrapper" className="">
        <Header profile={profile} />
        <div id="qodef-page-outer">
          <div id="qodef-page-inner" className="qodef-content-full-width">
            <main id="qodef-page-content" className="qodef-grid qodef-layout--template ">
              <div className="qodef-grid-inner clear">
                <div className="qodef-grid-item qodef-page-content-section qodef-col--12">
                  <div data-elementor-type="wp-page" data-elementor-id="2157" className="elementor elementor-2157">
                    <div className="elementor-inner">
                      <div className="elementor-section-wrap">
                        <Banner />
                        <ProductsHome
                          handleAddToCart={handleAddToCart}
                          handleRemoveFromCart={handleRemoveFromCart}
                          profile={profile}
                        />
                        <ADsOne />
                        <ProductsHomeHor
                          handleAddToCart={handleAddToCart}
                          handleRemoveFromCart={handleRemoveFromCart}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* <div>
        <HeaderTop />
        <Header profile={profile} />
        <ToolBar />
        <div><Banner /></div>
        <div><ProductsHome /></div>
        <div><ADsOne /></div>
        <div><ProductsHomeHor /></div>
        <div><HealthTips /></div>
        <div><Footer /></div>
      </div> */}
    </div>
  );
}

Home.defaultProps = {
  alert: {
    type: 'alert',
    message: 'Something went wrong. please try again latter',
    action: {
      to: '/',
      text: 'Covid19',
    },
  },
};

export default Home;
