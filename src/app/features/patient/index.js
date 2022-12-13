/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import { setAllPatients } from './_patientSlice';
import { getAllPatients as getPatients } from '../../../api';

export const getAllPatients = (dispatch, axios) => {
  getPatients(axios, (err, data) => {
    if (err) {
      const resScode = err?.response?.status;
      resScode === 401 ? null
        : resScode === 403 ? null
          : null;
    } else {
      dispatch(setAllPatients(data));
    }
  });
};
