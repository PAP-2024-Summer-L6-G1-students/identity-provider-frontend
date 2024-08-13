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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/entercodefromemail" element={<EnterCodeFromEmail/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
