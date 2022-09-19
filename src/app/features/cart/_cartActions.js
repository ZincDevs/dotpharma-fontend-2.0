/* eslint-disable import/prefer-default-export */
import { QUANTITY } from './_types';

export const quantityChangeAction = payload => dispatch => {
  dispatch({
    type: QUANTITY, payload,
  });
};
