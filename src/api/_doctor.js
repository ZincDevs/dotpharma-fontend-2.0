/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  doctors_api,
} = Constants;

export const getDoctors = async (pagination, callback) => {
  try {
    const { data } = await axios.get(doctors_api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
