/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  get_pharmacy__api,
  create_pharmacy__api,
  delete_pharmacy__api,
  update_pharmacy__api,
} = Constants;

export const getPharmacies = async callback => {
  try {
    const { data } = await axios.get(get_pharmacy__api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const createPharmacy = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(create_pharmacy__api, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const deletePharmacy = async (axios, phid, callback) => {
  try {
    const { data } = await axios.delete(delete_pharmacy__api(phid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const updatePharmacy = async (axios, phid, callback) => {
  try {
    const { data } = await axios.put(update_pharmacy__api(phid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
