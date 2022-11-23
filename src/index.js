import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';
import './plugins/index';
import './plugins/fontawesome/css/all.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import { store } from './app/store';
import { AuthProvider } from './context/AuthProvider';
import { MedicineProvider } from './context/MedicineProvider';
// import ContactUs from './views/communication/contactus/ContactUs';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MedicineProvider>
          <Provider store={store}>
            {/* <ContactUs /> */}
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </Provider>
        </MedicineProvider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>
  ,
);
