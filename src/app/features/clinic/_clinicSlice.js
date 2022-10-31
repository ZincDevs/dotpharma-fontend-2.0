/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const clinicSlice = createSlice({
  name: 'clinics',
  initialState: {},
  reducers: {
    setClinics: (state, action) => {
      state.clinics = action?.payload?.clinics;
    },
  },
});

export const { setClinics } = clinicSlice.actions;
export default clinicSlice.reducer;

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
