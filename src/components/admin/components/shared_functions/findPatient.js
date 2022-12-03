/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
export const foundPatient = (patients, p_id) => (patients?.filter(patient => patient?.p_id === p_id)[0]);
const date = () => new Date();
export const getDate = dt => `${date(dt).toDateString()} ${(date(dt).getHours().toString().length < 2) ? `0${date(dt).getHours()}` : date(dt).getHours()}:${(date(dt).getMinutes().toString().length < 2) ? `0${date(dt).getMinutes()}` : date(dt).getMinutes()} `;
