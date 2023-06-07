/* eslint-disable no-unused-vars */
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
    setClinic: (state, action) => {
      state.clinic = action.payload;
    },
  },
});

export const singleClinicSlice = createSlice({
  name: 'clinic',
  initialState: {},
  reducers: {
    setClinic: (state, action) => {
      state.singleClinic = action?.payload;
    },
  },
});

export const clinicInsuranceSilise = createSlice({
  name: 'clinicinsurace',
  initialState: {},
  reducers: {
    setClinicInsurances: (state, action) => {
      state.clinicInsurances = action?.payload.data;
    },
  },
});

export const allInsuranceSilise = createSlice({
  name: 'allinsurances',
  initialState: {},
  reducers: {
    setAllInsurances: (state, action) => {
      console.log('Called heare');
      state.allInsurances = action?.payload.data;
    },
  },
});

export const {
  setClinics, updateClinicRedux, deleteClinicRedux, createClinicRedux, getOneClinic,
} = clinicSlice.actions;
export const {
  setClinic,
} = singleClinicSlice.actions;
export const {
  setClinicInsurances,
} = clinicInsuranceSilise.actions;
export const { setAllInsurances } = allInsuranceSilise.actions;
export const clinicReducer = clinicSlice.reducer;
export const clinicInsurancesReducer = clinicInsuranceSilise.reducer;
export const singleClinicReducer = singleClinicSlice.reducer;
export const allInsurancesReduser = allInsuranceSilise.reducer;
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
