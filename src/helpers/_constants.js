export default {
  t_key_name: 'dotpharma-key-c-u',
  login_api: '/user/login',
  google_auth_api: '/user/googleauth',
  refresh_token_api: '/user/refresh-token',
  admin_login_api: '/user/admin/login',
  signup_api: '/user/signup',
  logout_api: 'user/logout',
  get_all_users_api: '/user/allusers',
  r_psw_rese_api: '/user/request-password-reset',
  r_r_psw_rese_api: '/user/resend-password-reset',
  apply_psw_reset_api: session => `/user/apply-password-reset/${session}`,
  verify_user_api: session => `/user/activateuser/${session}`,
  resend_verification_api: '/user/resendverification',

  cart_api: id => `/cart/${id}`,
  medicines_api: ({ page = 1, limit = 10 }) => `/medicine/getallmedicines?page=${page}&limit=${limit}`,

  my_profile_api: '/user/myprofile',
};
