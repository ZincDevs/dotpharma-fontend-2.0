/* eslint-disable import/prefer-default-export */
import { setMedicines, setMedicinesHor } from './_medicineSlice';
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

export const getMedicinesHor = ({ page, limit }, dispatch) => {
  dispatch(setMedicinesHor({ status: 'pending' }));
  getMedicinesApi({ page, limit }, (err, data) => {
    if (err) {
      dispatch(setMedicinesHor({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setMedicinesHor({ medicines: [...data], status: 'success' }));
    }
  });
};
