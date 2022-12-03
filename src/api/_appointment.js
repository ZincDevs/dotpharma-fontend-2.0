/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { Constants } from '../helpers';

const {
  appointment_api, get_appointments__api, accept_appointment_api, reject_appointment_api,
} = Constants;

export const createAppointment = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(appointment_api, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const getAppointments = async (pagination, callback, axios) => {
  try {
    const { data } = await axios.get(get_appointments__api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const acceptAppointment = async (axios, aid, callback) => {
  try {
    const { data } = await axios.put(accept_appointment_api(aid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const rejectAppointment = async (axios, aid, callback) => {
  try {
    const { data } = await axios.put(reject_appointment_api(aid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const deleteAppointment = async (axios, aid, callback) => {
  try {
    const { data } = await axios.delete(reject_appointment_api(aid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
