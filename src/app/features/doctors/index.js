/* eslint-disable import/prefer-default-export */
import { setDoctors } from './_doctorSlice';
import { getDoctors as getDoctorsApi } from '../../../api';

export const getDoctors = ({ page, limit }, dispatch) => {
  dispatch(setDoctors({ status: 'pending' }));
  getDoctorsApi({ page, limit }, (err, data) => {
    if (err) {
      console.log(err);
      dispatch(setDoctors({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setDoctors({ doctors: [...data], status: 'success' }));
    }
  });
};
