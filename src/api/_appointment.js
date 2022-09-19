/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { Constants } from '../helpers';

const {
  appointment_api,
} = Constants;

export const createAppointment = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(appointment_api, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
