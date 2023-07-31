/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  get_health_tips,
  create_health_tip,
  delete_healthtip_api,
} = Constants;

export const getHealthTips = async callback => {
  try {
    const { data } = await axios.get(get_health_tips);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const createHealthTip = async (axios, payload, callback) => {
  try {
    const { data } = await axios.post(create_health_tip, payload);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

export const deleteHealthTips = async (axios, hid, callback) => {
  try {
    const { data } = await axios.delete(delete_healthtip_api(hid));
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
