/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  get_clinics__api,
} = Constants;

export const getClinics = async callback => {
  try {
    const { data } = await axios.get(get_clinics__api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
