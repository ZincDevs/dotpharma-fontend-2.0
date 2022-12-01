/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  doctors_api, update__doctor_api, delete__doctor_api, create__doctor_api,
} = Constants;

export const getDoctors = async (pagination, callback) => {
  try {
    const { data } = await axios.get(doctors_api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const updateDoctor = async (axios, did, dataOb, callback) => {
  try {
    const { data } = await axios.put(update__doctor_api(did), dataOb);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const deleteDoctor = async (axios, did, callback) => {
  try {
    const { data } = await axios.delete(delete__doctor_api(did));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const createDoctor = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(create__doctor_api, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
