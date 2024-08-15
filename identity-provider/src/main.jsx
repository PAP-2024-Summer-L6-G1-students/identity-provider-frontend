import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css';
import Landing from './pages/Landing.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx'
import CreateAccount from './pages/CreateAccount.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ChangePassword from './pages/ChangePassword.jsx';
import SSOLogin from './pages/SSOLogin.jsx';
import Layout from './Layouts/Layout.jsx';
import CreateProfilePage from './pages/CreateProfilePage.jsx';
import AccountContext from './contexts/AccountContext.js';

import ShareInfo from './pages/ShareInfo.jsx';
import SSOPage from './pages/SSO.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import ResetConfirmation from './pages/ResetConfirmation.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing-page" element={<Landing />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:uuid" element={<ResetPassword />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);