/* eslint-disable import/prefer-default-export */
export const sortMedines = (med1, med2) => {
  if (med1.m_name < med2.m_name) {
    return -1;
  }
  if (med1.m_name > med2.m_name) {
    return 1;
  }
  return 0;
};
