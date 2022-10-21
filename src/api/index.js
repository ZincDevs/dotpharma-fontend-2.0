import {
  logIn, signUp, refreshToken, googleAuth, adminLogin,
} from './_auth';
import { verifyUser, resentVerification, getMyProfile } from './_user';
import { getMedicines } from './_medicine';
import { addToCart, removeCart, updateCart } from './_cart';
import { getDoctors } from './_doctor';
import { getTags } from './_tags';
import { getPharmacies } from './_pharmacies';

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
};
