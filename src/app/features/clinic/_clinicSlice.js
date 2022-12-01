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
    updateClinicRedux: (state, action) => {
      state.clinics = state.clinics.map(clinic => {
        if (clinic.c_id === action.payload.c_id) return action.payload;
        return clinic;
      });
    },
    deleteClinicRedux: (state, action) => {
      state.clinics = state.clinics?.filter(clinic => clinic.c_id !== action.payload);
    },
    createClinicRedux: (state, action) => {
      state.clinics = [action.payload, ...state.clinics];
    },
  },
});

export const {
  setClinics, updateClinicRedux, deleteClinicRedux, createClinicRedux,
} = clinicSlice.actions;
export default clinicSlice.reducer;

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
