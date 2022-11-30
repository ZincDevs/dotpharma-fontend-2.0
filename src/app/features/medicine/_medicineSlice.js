/* eslint-disable max-len */
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
    removeMedicine: (state, action) => {
      state.medicinesHor = state.medicinesHor?.filter(medicine => medicine.m_id !== action.payload);
    },
    updateMedicineRedux: (state, action) => {
      state.medicinesHor = state.medicinesHor?.map(medicine => {
        if (medicine.m_id === action.payload?.m_id) {
          return action.payload;
        }
        return medicine;
      });
    },
  },
});

export const {
  setMedicines, setMedicinesHor, setOneMedicine, removeMedicine, updateMedicineRedux,
} = medicineSlice.actions;
export default medicineSlice.reducer;
