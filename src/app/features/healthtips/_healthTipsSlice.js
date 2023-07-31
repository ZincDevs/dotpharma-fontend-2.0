/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const healthtipsSlice = createSlice({
  name: 'healthtips',
  initialState: {},
  reducers: {
    setHelthTips: (state, action) => {
      state.healthtips = action?.payload?.tips;
    },
  },
});

export const {
  setHelthTips,
} = healthtipsSlice.actions;
export default healthtipsSlice.reducer;
