/* eslint-disable import/prefer-default-export */
import { setAppointments } from './_appointmentSlice';
import { getAppointments as getAppointmentsApi } from '../../../api';
import { sortOrders } from '../../../helpers/_appHelpers';

export const getAppointments = ({ page, limit }, dispatch, axios) => {
  dispatch(setAppointments({ status: 'pending' }));
  getAppointmentsApi({ page, limit }, (err, data) => {
    if (err) {
      console.log(err);
      dispatch(setAppointments({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setAppointments({ appointments: [...data.sort(sortOrders)], status: 'success' }));
    }
  }, axios);
};
