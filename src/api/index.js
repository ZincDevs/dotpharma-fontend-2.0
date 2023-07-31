import {
  logIn, signUp, refreshToken, googleAuth, adminLogin,
} from './_auth';
import { verifyUser, resentVerification, getMyProfile } from './_user';
import { getMedicines, getMedicineById, getPharmacyMedicines } from './_medicine';
import {
  addToCart, removeCart, updateCart, removeCartById,
} from './_cart';
import { getDoctors } from './_doctor';
import { getTags } from './_tags';
import { getPharmacies } from './_pharmacies';
import { getClinics, getClinicInsurances, getAllInsurances } from './_clinics';
import { getAppointments } from './_appointment';
import { getAllPatients } from './_patient';
import { getAllOrders } from './_order';
import { createPayment, verifypayment } from './_payment';
import { getHealthTips, createHealthTip, deleteHealthTips } from './_healthTips';

export {
  logIn,
  signUp,
  verifyUser,
  resentVerification,
  refreshToken,
  googleAuth,
  getMedicines,
  getMyProfile,
  addToCart,
  removeCart,
  removeCartById,
  updateCart,
  getDoctors,
  getTags,
  adminLogin,
  getPharmacies,
  getClinics,
  getMedicineById,
  getAppointments,
  getAllPatients,
  getAllOrders,
  createPayment,
  verifypayment,
  getClinicInsurances,
  getAllInsurances,
  getPharmacyMedicines,
  getHealthTips,
  createHealthTip,
  deleteHealthTips,
};
