/* eslint-disable default-param-last */
/* eslint-disable no-undef */
import { QUANTITY } from './_types';

const initialState = {
  quantity: 1,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUANTITY:
      return { ...state, quantity: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
