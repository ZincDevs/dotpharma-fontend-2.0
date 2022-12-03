/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setAllPatients: (state, action) => {
      state.allPatients = action.payload;
    },
  },
});

export const { setAllPatients } = patientSlice.actions;
export default patientSlice.reducer;
