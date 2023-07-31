/* eslint-disable import/prefer-default-export */
import { setHelthTips } from './_healthTipsSlice';
import { getHealthTips as getHTips } from '../../../api';

export const getHealthTips = dispatch => {
  dispatch(setHelthTips({ status: 'pending' }));
  getHTips((err, data) => {
    if (err) {
      console.log(err);
      dispatch(setHelthTips({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setHelthTips({ tips: [...data], status: 'success' }));
    }
  });
};
