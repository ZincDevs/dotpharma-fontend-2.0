/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  medicines_api,
} = Constants;

export const getMedicines = async (pagination, callback) => {
  try {
    const { data } = await axios.get(medicines_api({ ...pagination }));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const createMedicine = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(Constants.create_medicine_api, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
