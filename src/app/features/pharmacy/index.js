/* eslint-disable import/prefer-default-export */
import { setPharmacies } from './_pharmacySlice';
import { getPharmacies as gePharmaciesApi } from '../../../api';

export const getPharmacies = dispatch => {
  dispatch(setPharmacies({ status: 'pending' }));
  gePharmaciesApi((err, data) => {
    if (err) {
      dispatch(setPharmacies({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setPharmacies({ pharmacies: data, status: 'success' }));
    }
  });
};
