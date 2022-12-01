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
    deletePharmacyRedux: (state, action) => {
      state.pharmacies = state?.pharmacies?.filter(pharmacy => pharmacy.ph_id !== action.payload);
    },
    updatePharmacyRedux: (state, action) => {
      state.pharmacies = state?.pharmacies?.map(pharmacy => {
        if (pharmacy?.ph_id === action.payload.ph_id) return action.payload;
        return pharmacy;
      });
    },
  },
});

export const { setPharmacies, deletePharmacyRedux, updatePharmacyRedux } = pharmacySlice.actions;
export default pharmacySlice.reducer;
