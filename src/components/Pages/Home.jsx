/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header, { HeaderTop, ToolBar } from '../header/Header';
import Alert from '../shared/Alert';
import Banner from '../banner/Banner';
import ProductsHome from '../products/ProductsHome';

function Home({ alert: defaultAlert }) {
  const [alert, setAlert] = useState(defaultAlert);
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleShowAlert = data => {
    setAlert(data || defaultAlert);
    setShowAlert(true);
  };
  return (
    <div className="home-container">
      {(showAlert && alert) && (<Alert info={alert} handleCloseAlert={handleCloseAlert} />)}
      <div>
        <HeaderTop />
        <Header />
        <ToolBar />
        <Banner />
        <div><ProductsHome /></div>
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
