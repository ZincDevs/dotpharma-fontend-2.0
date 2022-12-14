import {
  logIn, signUp, refreshToken, googleAuth, adminLogin,
} from './_auth';
import { verifyUser, resentVerification, getMyProfile } from './_user';
import { getMedicines, getMedicineById } from './_medicine';
import { addToCart, removeCart, updateCart } from './_cart';
import { getDoctors } from './_doctor';
import { getTags } from './_tags';
import { getPharmacies } from './_pharmacies';
import { getClinics } from './_clinics';
import { getAppointments } from './_appointment';
import { getAllPatients } from './_patient';
import { getAllOrders } from './_order';

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
};
