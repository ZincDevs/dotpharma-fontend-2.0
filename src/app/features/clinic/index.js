/* eslint-disable import/prefer-default-export */
import { setClinics, setClinicInsurances, setAllInsurances } from './_clinicSlice';
import { getClinics as getClinicsApi, getClinicInsurances as getClinicInsurancesApi, getAllInsurances } from '../../../api';

export const getClinics = dispatch => {
  dispatch(setClinics({ status: 'pending' }));
  getClinicsApi((err, data) => {
    if (err) {
      dispatch(setClinics({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setClinics({ clinics: [...data], status: 'success' }));
    }
  });
};

export const getClinicInsurance = (dispatch, cid) => {
  dispatch(setClinicInsurances({ status: 'pending' }));
  getClinicInsurancesApi(cid, (err, data) => {
    if (err) {
      dispatch(setClinicInsurances({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setClinicInsurances({ data, status: 'success' }));
    }
  });
};

export const getAllInsurance = dispatch => {
  dispatch(setAllInsurances({ status: 'pending' }));
  getAllInsurances((err, data) => {
    if (err) {
      dispatch(setAllInsurances({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setAllInsurances({ data, status: 'success' }));
    }
  });
};
