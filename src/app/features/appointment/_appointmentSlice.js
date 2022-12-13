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
    acceptAppointmentRedux: (state, action) => {
      state.appointments = state.appointments.map(appointement => {
        if (appointement.a_id === action.payload) {
          return {
            ...appointement,
            a_status: 'approved',

          };
        }
        return appointement;
      });
    },
    rejectAppointmentRedux: (state, action) => {
      state.appointments = state.appointments.map(appointement => {
        if (appointement.a_id === action.payload) {
          return {
            ...appointement,
            a_status: 'rejected',

          };
        }
        return appointement;
      });
    },

    deleteAppointmentRedux: (state, action) => {
      state.appointments = state.appointments?.filter(appointement => appointement.c_id !== action.payload);
    },
  },
});

export const {
  setAppointments, acceptAppointmentRedux, deleteAppointmentRedux, rejectAppointmentRedux,
} = appointementSlice.actions;
export default appointementSlice.reducer;

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
