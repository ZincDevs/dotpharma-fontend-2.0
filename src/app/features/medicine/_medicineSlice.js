/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const medicineSlice = createSlice({
  name: 'medicines',
  initialState: {},
  reducers: {
    setMedicines: (state, action) => {
      state.medicines = action?.payload?.medicines;
    },
    setMedicinesHor: (state, action) => {
      state.medicinesHor = action?.payload?.medicines;
    },
    setOneMedicine: (state, action) => {
      state.medicine = action?.payload?.medicine;
    },
  },
});

export const { setMedicines, setMedicinesHor, setOneMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;
