/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { Constants } from '../helpers';

const {
  get_orders_api, accept_order_api, reject_order_api, delete_order_api,
} = Constants;
export const getAllOrders = async (axios, callback) => {
  try {
    const { data } = await axios.get(get_orders_api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const acceptOrder = async (axios, oid, callback) => {
  try {
    const { data } = await axios.put(accept_order_api(oid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const rejectOrder = async (axios, aid, callback) => {
  try {
    const { data } = await axios.put(reject_order_api(aid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const deleteOrder = async (axios, oid, callback) => {
  try {
    const { data } = await axios.delete(delete_order_api(oid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
