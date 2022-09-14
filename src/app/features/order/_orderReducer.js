/* eslint-disable default-param-last */
/* eslint-disable no-undef */
import { CREATE_ORDER } from './_types';

const initialState = {
  order: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
