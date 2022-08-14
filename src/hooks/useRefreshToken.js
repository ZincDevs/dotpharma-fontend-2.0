/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import useAuth from './useAuth';
import { Constants } from '../helpers';
import axios from '../api/_axios';

const { refresh_token_api } = Constants;

function useRefreshToken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    try {
      const res = await axios.get(refresh_token_api);
      setAuth(prev => ({
        ...prev,
        access_token: res.data.access_token,
        userData: res.data.userData,
      }));
      return res.data.access_token;
    } catch (error) {
      setAuth(() => ({}));
      return error.status;
    }
  };
  return refresh;
}

export default useRefreshToken;
