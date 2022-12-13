/* eslint-disable max-len */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    setOrders: (state, action) => {
      state.orders = action?.payload?.orders;
    },
    acceptOrderRedux: (state, action) => {
      state.orders = state.orders.map(order => {
        if (order.o_id === action.payload) {
          return {
            ...order,
            o_status: 'approved',

          };
        }
        return order;
      });
    },
    rejectOrderRedux: (state, action) => {
      state.orders = state.orders.map(order => {
        if (order.o_id === action.payload) {
          return {
            ...order,
            o_status: 'rejected',

          };
        }
        return order;
      });
    },
    deleteOrderRedux: (state, action) => {
      state.orders = state.orders?.filter(order => order.o_id !== action.payload);
    },
  },
});

export const {
  acceptOrderRedux, deleteOrderRedux, rejectOrderRedux, setOrders,
} = ordersSlice.actions;
export default ordersSlice.reducer;
