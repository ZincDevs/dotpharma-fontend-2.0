/* eslint-disable import/prefer-default-export */
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './features/user/_userSlice';
import medicineReducer from './features/medicine/_medicineSlice';
import doctorReducer from './features/doctors/_doctorSlice';
import tagRedicer from './features/tags/_tagSlice';
import cart from './features/cart';
import order from './features/order';
import pharmacyReducer from './features/pharmacy/_pharmacySlice';
import clinicReducer from './features/clinic/_clinicSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    medicine: medicineReducer,
    cart,
    order,
    doctor: doctorReducer,
    tag: tagRedicer,
    pharmacy: pharmacyReducer,
    clinic: clinicReducer,
  },
  logger: true,
}, applyMiddleware(thunk));
