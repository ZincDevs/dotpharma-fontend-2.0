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
    updateDoctorRedux: (state, action) => {
      state.doctors = state.doctors?.map(doctor => {
        if (doctor.d_id === action.payload.d_id) return action.payload;
        return doctor;
      });
    },
    deleteDoctorRedux: (state, action) => {
      state.doctors = state.doctors?.filter(doctor => doctor.d_id !== action.payload);
    },
    createDoctorRedux: (state, actions) => {
      state.doctors = [actions.payload, ...state.doctors];
    },
  },
});

export const {
  setDoctors, updateDoctorRedux, deleteDoctorRedux, createDoctorRedux,
} = doctorSlice.actions;
export default doctorSlice.reducer;
