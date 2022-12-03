/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { Constants } from '../helpers';

const {
  get__all_patients,
} = Constants;
export const getAllPatients = async (axios, callback) => {
  try {
    const { data } = await axios.get(get__all_patients);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
