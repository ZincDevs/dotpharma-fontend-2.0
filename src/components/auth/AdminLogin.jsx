/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Email, Password } from '../shared/Input';
import { Button, ProgressBar } from '../shared/Elements';
import { ContentHead } from '../shared/Contents';
import useAuth from '../../hooks/useAuth';
import Alert from '../shared/Alert';
import { adminLogin } from '../../api';

function AdminLogin({ alert: defaultAlert }) {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/admin/medicines';
  const [status, setStatus] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailErrors, setEmailErrors] = useState(null);
  const [passwordErrors, setPasswordErrors] = useState(null);
  const [alert, setAlert] = useState(defaultAlert);
  const [showAlert, setShowAlert] = useState(true);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleLoginSuccess = response => {
    setEmailErrors(undefined);
    setPasswordErrors(undefined);
    setAuth({ ...response });
    navigate(from, { replace: true });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleShowAlert = data => {
    setAlert(data || defaultAlert);
    setShowAlert(true);
  };

  const handleLogin = e => {
    e.preventDefault();
    const data = { email, password };
    setStatus('pending');
    adminLogin(data, (err, data) => {
      if (err) {
        setStatus('fail');
        const resScode = err?.response?.status;
        if (resScode === 400 || resScode === 401 || resScode === 403) {
          handleShowAlert({
            type: 'err',
            message: 'Invalid email or password! 😞',
          });
        } else {
          handleShowAlert({
            type: 'err',
            message: 'Something went wrong. please try again latter',
          });
        }
      } else {
        handleLoginSuccess(data);
      }
    });
  };

  return (
    <div className="loginContainer">
      <div className="row loginContent">
        <div className="col-12 right d-flex justify-content-center align-items-center">
          <div className="c-f-u-content">
            <ContentHead />
            <div className="c-f-content">
              {status === 'pending' && <ProgressBar />}
              <div className="c-f-i-content py-4 px-5">
                {showAlert && alert && (
                  <Alert info={alert} handleCloseAlert={handleCloseAlert} />
                )}
                <div className="c-content-fields w-auto">
                  <h6>Sign In as admin🤞</h6>
                  <form onSubmit={handleLogin}>
                    <Email
                      handleOnChange={handleEmailChange}
                      value={email}
                      errors={emailErrors}
                      labeled
                    />
                    <Password
                      handleOnChange={handlePasswordChange}
                      value={password}
                      errors={passwordErrors}
                    />
                    <Button label="Sign In" classes="primary-button" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
