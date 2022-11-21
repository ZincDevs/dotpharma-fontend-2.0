/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Constants } from '../helpers/index';
import axios from '../api/_axios';
import useAuth from './useAuth';
import { logout } from '../app/features/user/_userSlice';

const { logout_api } = Constants;

const useLogout = async (navigate, dispatch, setAuth) => {
  try {
    await axios(logout_api);
    setAuth({});
    dispatch(logout());
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export default useLogout;
