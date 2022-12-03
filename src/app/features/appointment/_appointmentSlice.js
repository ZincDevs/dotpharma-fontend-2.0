/* eslint-disable max-len */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const appointementSlice = createSlice({
  name: 'appointment',
  initialState: {},
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action?.payload?.appointments;
    },
    updateAppintmentRedux: (state, action) => {
      state.appointments = state.appointments.map(appointement => {
        if (appointement.c_id === action.payload.c_id) return action.payload;
        return appointement;
      });
    },
    deleteAppointmentRedux: (state, action) => {
      state.appointments = state.appointments?.filter(appointement => appointement.c_id !== action.payload);
    },
    createAppointmentRedux: (state, action) => {
      state.appointments = [action.payload, ...state.appointments];
    },
  },
});

export const {
  setAppointments, updateAppintmentRedux, deleteAppointmentRedux, createAppointmentRedux,
} = appointementSlice.actions;
export default appointementSlice.reducer;

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
