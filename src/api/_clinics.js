/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  get_clinics__api, delete_clinic__api, update_clinics__api, create_clinic__api, get_clinic_insurances__api, get_insurances__api, add_clinic_insurance,
} = Constants;

export const getClinics = async callback => {
  try {
    const { data } = await axios.get(get_clinics__api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const createClinic = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(create_clinic__api, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const deleteClinic = async (axios, cid, callback) => {
  try {
    const { data } = await axios.delete(delete_clinic__api(cid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const updateClinic = async (axios, phid, dataOb, callback) => {
  try {
    const { data } = await axios.put(update_clinics__api(phid), dataOb);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const getClinicInsurances = async (cid, callback) => {
  try {
    const { data } = await axios.get(get_clinic_insurances__api(cid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const getAllInsurances = async callback => {
  try {
    const { data } = await axios.get(get_insurances__api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const createInsurance = async (axios, payload, callback) => {
  try {
    const { data } = await axios.put(add_clinic_insurance, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
