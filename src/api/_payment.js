/* eslint-disable camelcase */
import axios from 'axios';
import { Constants } from '../helpers';

const {
  create_payment,
  verfy_payment,
} = Constants;
const BASE = process.env.REACT_APP_API_URL;
export const createPayment = async (payload, callback) => {
  try {
    const { data } = await axios.post(`${BASE}${create_payment}`, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const verifypayment = async (ref, callback) => {
  try {
    const { data } = await axios.post(`${BASE}${verfy_payment}${ref}`);
    await callback(null, data);
  } catch (error) {
    callback(error);
  }
};
