/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {},
  reducers: {
    setDoctors: (state, action) => {
      state.doctors = action?.payload?.doctors;
    },
  },
});

export const { setDoctors } = doctorSlice.actions;
export default doctorSlice.reducer;
