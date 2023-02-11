/* eslint-disable camelcase */
import { Constants } from '../helpers';

const {
  cart_api,
} = Constants;

export const addToCart = async (axios, m_id, callback) => {
  try {
    const { data } = await axios.post(cart_api(m_id), { quantity: '1' });
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const updateCart = async (axios, c_id, quantity, callback) => {
  try {
    const { data } = await axios.put(cart_api(c_id), { quantity });
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const removeCart = async (axios, cart, callback) => {
  try {
    const resData = [];
    cart.forEach(async c => {
      const { data } = await axios.delete(cart_api(c.c_id));
      resData.push(data);
    });
    callback(null, resData);
  } catch (error) {
    callback(error);
  }
};
