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
import EnterCodeFromEmail from './pages/EnterCodeFromEmail.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ChangePassword from './pages/ChangePassword.jsx';
import SSOLogin from './pages/SSOLogin.jsx';
import Layout from './Layouts/Layout.jsx';
import CreateProfilePage from './pages/CreateProfilePage.jsx';
import AccountContext from './contexts/AccountContext.js';

import ShareInfo from './pages/ShareInfo.jsx';
import SSOPage from './pages/SSO.jsx'
import CreateProfilePage from './pages/CreateProfilePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AccountContext.Provider value={{
      getLoggedInUser: () => {
        return localStorage.getItem("loggedInUser");
      },

      loginUser: (username) => { // logs in user by updating the local storage
        localStorage.setItem("loggedInUser", username);
      },
      
      logoutUser: () => { // logs user out by remove them from the local storage
        localStorage.removeItem("loggedInUser");
      },
      }}>

      <Router>
        <Routes>
          <Route path="/entercodefromemail" element={<EnterCodeFromEmail />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/" element={<Landing />} />
          <Route path="/sso/permissions" element={<ShareInfo />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sso/login/:domain" element={<SSOLogin />} />
          
          <Route path="/createprofile" element={<CreateProfilePage />} /> 
          <Route path="/sso" element={<SSOPage />} />
        </Routes>
      </Router>
    </AccountContext.Provider>
  </React.StrictMode>,
);