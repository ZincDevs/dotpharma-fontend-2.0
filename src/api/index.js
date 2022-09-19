import {
  logIn, signUp, refreshToken, googleAuth,
} from './_auth';
import { verifyUser, resentVerification, getMyProfile } from './_user';
import { getMedicines } from './_medicine';
import { addToCart, removeCart, updateCart } from './_cart';
import { getDoctors } from './_doctor';

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
};
