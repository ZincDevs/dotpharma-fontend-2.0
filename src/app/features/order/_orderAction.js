/* eslint-disable import/prefer-default-export */
import axios from '../../../api/_axios';
import { CREATE_ORDER } from './_types';
import { Constants } from '../../../helpers';

export const createOrderAction = async orderData => async dispatch => {
  // authorization
  console.log(orderData);
  try {
    const data = await axios.post(Constants.create_order, orderData);
    dispatch({
      type: CREATE_ORDER, payload: data.data.body, error: null,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER, payload: [], error,
    });
  }
};

export const createOrder = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(Constants.create_order, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
