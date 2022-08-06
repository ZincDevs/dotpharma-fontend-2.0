/* eslint-disable import/prefer-default-export */
import { setMedicines } from './_medicineSlice';
import { getMedicines as getMedicinesApi } from '../../../api';

export const getMedicines = ({ page, limit }, dispatch) => {
  dispatch(setMedicines({ status: 'pending' }));
  getMedicinesApi({ page, limit }, (err, data) => {
    if (err) {
      dispatch(setMedicines({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setMedicines({ medicines: [...data], status: 'success' }));
    }
  });
};
