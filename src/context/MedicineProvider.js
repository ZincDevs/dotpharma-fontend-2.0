/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import { createContext, useState } from 'react';

const MedicineContext = createContext({});

export function MedicineProvider({ children }) {
  const [medicineCont, setMedicineCont] = useState({});

  return (
    <MedicineContext.Provider value={{ medicineCont, setMedicineCont }}>
      {children}
    </MedicineContext.Provider>
  );
}

export default MedicineContext;
