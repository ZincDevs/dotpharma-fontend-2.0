/* eslint-disable no-lone-blocks */
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import key from 'uniqid';
import { useSelector } from 'react-redux';
import Elements from './shared/Index';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import ApplyPasswordReset from './auth/ApplyPasswordReset';
import NotFound from './shared/NotFound';
import Home from './Pages/Home';
import HomeSection from './appSections/HomeSection';
import Cart from './Cart/CartHome';
// import Empty from './shared/Empty';
import Verification from './auth/VerificationComplete';
import TermsAndConditions from './settings/TermsAndConditions';
import PrivacyPolicy from './settings/PrivacyPolicy';
// import Services from './home/fragments/Services';
// import HealthTips from './home/fragments/HealthTips';
import Layout from './layouts/Layout';
import RequireAuth from '../routes/RequireAuth';
// import RequireAuthHome from './routes/RequireAuthHome';
// import RequireAuthAdmin from './routes/RequireAuthAdmin';
// import UserHome from './home/fragments/home/UserHome';

import PersistLogin from './auth/PersistLogin';
import OrderHome from './order/OrderHome';
// import Doctors from './doctors/Doctors';
import Appointment from './appointment/Appointment';
import MakeOrdder from './order/MakeOrdder';
import MakeOrdderOnPharmacy from './order/OrderOnPharmacy';
import Admin from './admin/Admin';
import Medicine from './admin/Medicine';
import Orders from './admin/Orders';
import Appointments from './admin/Appointments';
import Clinics from './admin/Clinics';
import Pharmacies from './admin/Pharmacies';
import RequireAuthAdmin from '../routes/RequireAuthAdmin';
import AdminLogin from './auth/AdminLogin';
import Pharmacy from './pharmacies/Pharmacy';
import ClinicsList from './clinics/Clinics';
import ViewProduct from './products/ViewProduct';
import DoctorsAdmin from './admin/Doctors';
import Doctors from './doctors/Doctors';
import AdminHome from './admin/AdminHome';
// import Empty from './shared/Empty';

// Admin components
// import Dashboard from './admin/Dashboard';
// import AdminHome from './admin/fragments/Home';
// import AdminUsers from './admin/fragments/Users';
// import AdminMedicines from './admin/fragments/Medicines';
// import AdminOrders from './admin/fragments/Orders';
// import AdminPharmacies from './admin/fragments/Pharmacies';

function App() {
  const user = useSelector(state => state?.user?.MyProfile);
  return (
    <Routes>
      <Route path="/" key={key()} element={<Layout />}>
        {/* Public Routes for users */}
        <Route path="/login" key={key()} element={<Login />} />
        <Route path="/adminlogin" key={key()} element={<AdminLogin />} />
        <Route
          path="/forgot-password"
          key={key()}
          element={<ForgotPassword />}
        />
        <Route
          path="/reset-password"
          key={key()}
          element={<ApplyPasswordReset />}
        />

        <Route path="/signup" key={key()} element={<Signup />} />
        <Route path="/verify" key={key()} element={<Verification />} />
        <Route
          path="/terms-and-conditions"
          key={key()}
          element={<TermsAndConditions />}
        />
        <Route path="/privacy-policy" key={key()} element={<PrivacyPolicy />} />
        <Route path="/elms" key={key()} element={<Elements />} />

        {/* Private Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuthAdmin />}>
            <Route path="/admin" key={key()} element={<Admin />}>
              <Route path="home" key={key()} element={<AdminHome />} />
              <Route path="medicines" key={key()} element={<Medicine />} />
              <Route path="orders" key={key()} element={<Orders />} />
              <Route path="clinics" key={key()} element={<Clinics />} />
              <Route path="Pharmacies" key={key()} element={<Pharmacies />} />
              <Route path="doctors" key={key()} element={<DoctorsAdmin />} />
              <Route
                path="appointments"
                key={key()}
                element={<Appointments />}
              />
            </Route>
          </Route>
          <Route path="/" key={key()} element={<Home />}>
            <Route path="/" key={key()} element={<HomeSection />} />
            <Route path="/dot-pharmacies" key={key()} element={<Pharmacy />} />
            <Route path="/product/:pid" key={key()} element={<ViewProduct />} />
            <Route path="/dot-clinics" key={key()} element={<ClinicsList />} />
            <Route path="/doctors" key={key()} element={<Doctors />} />
            <Route element={<RequireAuth />}>
              <Route path="/cart" key={key()} element={user?.cart?.length < 1 ? <Navigate to="/" /> : <Cart />} />
              <Route path="/orders" key={key()} element={<MakeOrdder />} />
              <Route path="/orderpharmacy/:pharmacyid" key={key()} element={<MakeOrdderOnPharmacy />} />
              <Route path="/checkout" key={key()} element={<OrderHome />} />
              <Route
                path="/appointment"
                key={key()}
                element={<Appointment />}
              />
            </Route>
          </Route>
        </Route>

        <Route path="*" key={key()} element={<NotFound />} />
        {/* <Route path="/unauthorized" key={key()} element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
