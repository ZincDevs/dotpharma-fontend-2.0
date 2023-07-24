/* eslint-disable import/prefer-default-export */
import { setMedicines, setMedicinesHor, setOneMedicine } from './_medicineSlice';
import { getMedicines as getMedicinesApi, getMedicineById, getPharmacyMedicines } from '../../../api';
import { sortMedines } from '../../../helpers';

export const getMedicines = ({ page, limit }, dispatch) => {
  dispatch(setMedicines({ status: 'pending' }));
  getMedicinesApi({ page, limit }, (err, data) => {
    console.log(data.count);
    if (err) {
      dispatch(setMedicines({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setMedicines({ medicines: [...data.medicines.sort(sortMedines)], status: 'success', count: data.count }));
    }
  });
};

export const getOneMedicine = (mid, dispatch) => {
  dispatch(setMedicines({ status: 'pending' }));
  getMedicineById(mid, (err, data) => {
    if (err) {
      dispatch(setOneMedicine({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setOneMedicine({ medicine: data, status: 'success' }));
    }
  });
};

export const getMedicinesHor = dispatch => {
  dispatch(setMedicinesHor({ status: 'pending' }));
  getPharmacyMedicines((err, data) => {
    if (err) {
      dispatch(setMedicinesHor({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setMedicinesHor({ medicines: [...data.sort(sortMedines)], status: 'success' }));
    }
  });
};
