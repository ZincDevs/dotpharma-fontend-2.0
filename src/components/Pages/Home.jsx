/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Header, { HeaderTop, ToolBar } from '../header/Header';
import { getMyProfile } from '../../app/features/user';
import Alert from '../shared/Alert';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import ProductsHome, { ProductsHomeHor } from '../products/ProductsHome';
import HealthTips from '../Tips/HealthTips';
import { ADsOne } from '../ADs/ADs';

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
  useEffect(() => {
    getMyProfile(dispatch, axios);
  }, []);
  return (
    <div className="home-container">
      {(showAlert && alert) && (<Alert info={alert} handleCloseAlert={handleCloseAlert} />)}
      <div>
        <HeaderTop />
        <Header profile={profile} />
        <ToolBar />
        <div><Banner /></div>
        <div><ProductsHome /></div>
        <div><ADsOne /></div>
        <div><ProductsHomeHor /></div>
        <div><HealthTips /></div>
        <div><Footer /></div>
      </div>
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
