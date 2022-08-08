/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/_userSlice';
import medicineReducer from './features/medicine/_medicineSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    medicine: medicineReducer,
  },
  logger: true,
});
