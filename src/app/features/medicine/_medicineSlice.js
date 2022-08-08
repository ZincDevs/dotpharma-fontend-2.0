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
  },
});

export const { setMedicines } = medicineSlice.actions;
export default medicineSlice.reducer;
