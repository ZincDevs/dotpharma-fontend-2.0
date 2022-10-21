/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  get_pharmacy__api,
} = Constants;

export const getPharmacies = async callback => {
  try {
    const { data } = await axios.get(get_pharmacy__api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
