import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import CreateProfilePage from './pages/CreateProfilePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/entercodefromemail" element={<EnterCodeFromEmail/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing />} />
        {/* landing is styled */}
        <Route path="/ChangePassword" element={<ChangePassword />} />
        {/* change password is styled */}
        <Route path="/create-account" element={<CreateAccount />} />
        {/* create acount is styled */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* forgot password is styled */}
        <Route path="/login" element={<Login />} />
        {/* log in is styled */}
       <Route path = "/createprofile" element={<CreateProfilePage />} /> 
       <Route path = "/profilepage" element={<ProfilePage/>} /> 

       {/* what needs to be styled:
       create profile
       enter code from email
       dashboard-farheen
       profile page */}

      </Routes>
    </Router>
  </React.StrictMode>,
);
