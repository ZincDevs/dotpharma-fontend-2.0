/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import { getMyProfile } from '../../app/features/user';
import Alert from '../shared/Alert';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

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

  useEffect(() => {
    getMyProfile(dispatch, axios);
  }, []);
  return (
    <div className="">
      <ToastContainer />
      {(showAlert && alert) && (<Alert info={alert} handleCloseAlert={handleCloseAlert} />)}
      <div id="qodef-page-wrapper" className="">
        <Header profile={profile} />
        <Outlet />
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
