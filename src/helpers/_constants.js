/* eslint-disable camelcase */
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
  create_order: '/orders/createorder',
  apply_psw_reset_api: session => `/user/apply-password-reset/${session}`,
  verify_user_api: session => `/user/activateuser/${session}`,
  resend_verification_api: '/user/resendverification',

  cart_api: id => `/cart/${id}`,
  medicines_api: ({ page = 1, limit = 10 }) => `/medicine/getallmedicines?page=${page}&limit=${limit}`,
  medicines_one_api: mid => `/medicine/findbyid/${mid}`,

  my_profile_api: '/user/myprofile',
  get__all_patients: '/patient/allpatients',
  doctors_api: '/doctor/findall',
  create__doctor_api: '/doctor/createdoctor',
  update__doctor_api: did => `/doctor/updatedoctor/${did}`,
  delete__doctor_api: did => `/doctor/deletedoctor/${did}`,
  get_appointments__api: '/appointments/findall',
  appointment_api: '/appointments/makeappointment',
  accept_appointment_api: aid => `/appointments/approveappointment/${aid}`,
  reject_appointment_api: aid => `/appointments/rejectappointment/${aid}`,
  tag_get_api: '/tags/getall',
  create_medicine_api: '/medicine/createnew',
  update_medicine_api: mid => `/medicine/updatemedicine/${mid}`,
  delete_medicine_api: mid => `/medicine/deletemedicine/${mid}`,
  get_pharmacy__api: '/pharmacy/findall',
  create_pharmacy__api: '/pharmacy/createnew',
  delete_pharmacy__api: ph_id => `/pharmacy/deletepharmacy/${ph_id}`,
  update_pharmacy__api: ph_id => `/pharmacy/updatepharmacy/${ph_id}`,
  get_clinics__api: '/clinics/findall',
  create_clinic__api: '/clinics/createclinic',
  delete_clinic__api: c_id => `/clinics/deleteclinic/${c_id}`,
  update_clinics__api: c_id => `/clinics/updateclinic/${c_id}`,
};
