/* eslint-disable no-lone-blocks */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import key from 'uniqid';
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
import Doctors from './doctors/Doctors';
import Appointment from './appointment/Appointment';
import MakeOrdder from './order/MakeOrdder';
// import Empty from './shared/Empty';

// Admin components
// import Dashboard from './admin/Dashboard';
// import AdminHome from './admin/fragments/Home';
// import AdminUsers from './admin/fragments/Users';
// import AdminMedicines from './admin/fragments/Medicines';
// import AdminOrders from './admin/fragments/Orders';
// import AdminPharmacies from './admin/fragments/Pharmacies';

function App() {
  return (
    <Routes>
      <Route path="/" key={key()} element={<Layout />}>
        {/* Public Routes for users */}
        <Route path="/login" key={key()} element={<Login />} />
        <Route path="/forgot-password" key={key()} element={<ForgotPassword />} />
        <Route path="/reset-password" key={key()} element={<ApplyPasswordReset />} />

        <Route path="/signup" key={key()} element={<Signup />} />
        <Route path="/verify" key={key()} element={<Verification />} />
        <Route path="/terms-and-conditions" key={key()} element={<TermsAndConditions />} />
        <Route path="/privacy-policy" key={key()} element={<PrivacyPolicy />} />
        <Route path="/elms" key={key()} element={<Elements />} />

        {/* Private Routes */}
        <Route element={<PersistLogin />}>
          <Route path="/" key={key()} element={<Home />}>
            <Route path="/" key={key()} element={<HomeSection />} />
            <Route path="/doctors" key={key()} element={<Doctors />} />
            <Route element={<RequireAuth />}>
              <Route path="/cart" key={key()} element={<Cart />} />
              <Route path="/orders" key={key()} element={<MakeOrdder />} />
              <Route path="/checkout" key={key()} element={<OrderHome />} />
              <Route path="/appointment" key={key()} element={<Appointment />} />
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
