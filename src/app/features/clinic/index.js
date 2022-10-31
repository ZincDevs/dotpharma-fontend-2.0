/* eslint-disable import/prefer-default-export */
import { setClinics } from './_clinicSlice';
import { getClinics as getClinicsApi } from '../../../api';

export const getClinics = dispatch => {
  console.log('Helloooo');
  dispatch(setClinics({ status: 'pending' }));
  getClinicsApi((err, data) => {
    if (err) {
      console.log(err);
      dispatch(setClinics({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setClinics({ clinics: [...data], status: 'success' }));
    }
  });
};
