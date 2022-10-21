/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from './_axios';
import { Constants } from '../helpers';

const {
  tag_get_api,
} = Constants;

export const getTags = async callback => {
  try {
    const { data } = await axios.get(tag_get_api);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
