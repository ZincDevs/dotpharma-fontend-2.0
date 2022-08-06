/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import GoogleLogin from 'react-google-login';
import { googleAuth } from '../../api';

export default function GoogleLoginComponent({
  handleStatus, handleShowAlert, handleSuccess,
}) {
  const handleOnSuccess = result => {
    const { tokenId: token } = result;
    handleStatus('pending');
    googleAuth({ token }, (err, data) => {
      if (err) {
        handleStatus('fail');
        const resScode = err?.response?.status;
        if (resScode === 400 || resScode === 401 || resScode === 403) {
          handleShowAlert({ type: 'err', message: 'Could not authenticate. please try again 😞' });
        } else {
          handleShowAlert({ type: 'err', message: 'Something went wrong. please try again latter' });
        }
      } else {
        handleSuccess(data);
      }
    });
  };
  const handleOnError = error => {
    handleShowAlert({ type: 'err', message: 'Could not authenticate. please try again 😞' });
  };
  return (
    <div className="pt-2 d-flex justify-content-center">
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH2_CLIENTID}
        buttonText="Continue with google"
        onSuccess={handleOnSuccess}
        onFailure={handleOnError}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
