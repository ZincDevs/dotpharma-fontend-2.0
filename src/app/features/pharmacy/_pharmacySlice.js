/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const pharmacySlice = createSlice({
  name: 'pharmacies',
  initialState: {},
  reducers: {
    setPharmacies: (state, action) => {
      state.pharmacies = action?.payload?.pharmacies;
    },
  },
});

export const { setPharmacies } = pharmacySlice.actions;
export default pharmacySlice.reducer;
