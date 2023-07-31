/* eslint-disable import/prefer-default-export */
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './features/user/_userSlice';
import medicineReducer from './features/medicine/_medicineSlice';
import doctorReducer from './features/doctors/_doctorSlice';
import tagRedicer from './features/tags/_tagSlice';
import cart from './features/cart';
import orderReducer from './features/order/_orderSlice';
import pharmacyReducer from './features/pharmacy/_pharmacySlice';
import {
  clinicReducer, singleClinicReducer, clinicInsurancesReducer, allInsurancesReduser,
} from './features/clinic/_clinicSlice';
import appointmentReducer from './features/appointment/_appointmentSlice';
import patientReducer from './features/patient/_patientSlice';
import healthTips from './features/healthtips/_healthTipsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    medicine: medicineReducer,
    cart,
    order: orderReducer,
    doctor: doctorReducer,
    tag: tagRedicer,
    pharmacy: pharmacyReducer,
    clinic: clinicReducer,
    appointment: appointmentReducer,
    patient: patientReducer,
    singleClinic: singleClinicReducer,
    clinicInsurances: clinicInsurancesReducer,
    allInsurances: allInsurancesReduser,
    healthTips,
  },
  logger: true,
}, applyMiddleware(thunk));
