/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { Constants } from '../../../helpers';
import { setOrders } from './_orderSlice';
import { getAllOrders } from '../../../api';
import { sortOrders } from '../../../helpers/_appHelpers';

export const createOrder = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(Constants.create_order, payload);
    await callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const getOrders = (dispatch, axios) => {
  getAllOrders(axios, (err, data) => {
    if (err) {
      dispatch(setOrders({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setOrders({ orders: [...data.sort(sortOrders)], status: 'success' }));
    }
  });
};
