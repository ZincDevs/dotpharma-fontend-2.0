/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { setMyProfile } from './_userSlice';
import { getMyProfile as getMyProfileApi } from '../../../api';

export const getMyProfile = (dispatch, axios) => {
  dispatch(setMyProfile({ status: 'pending' }));
  getMyProfileApi(axios, (err, data) => {
    if (err) {
      const resScode = err?.response?.status;
      resScode === 401 ? dispatch(setMyProfile({ status: 'fail', message: 'Unauthorized 😞' }))
        : resScode === 403 ? dispatch(setMyProfile({ status: 'fail', message: 'Forbidden 😞' }))
          : dispatch(setMyProfile({ status: 'fail', message: 'Something went wrong. 😞' }));
    } else {
      dispatch(setMyProfile({ user: data, status: 'success' }));
    }
  });
};
