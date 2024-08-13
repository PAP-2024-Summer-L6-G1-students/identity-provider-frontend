import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css';
import LandingPage from './pages/LandingPage.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Login from './pages/Login.jsx';
import EnterCodeFromEmail from './pages/EnterCodeFromEmail.jsx';
import Dashboard from './pages/Dashboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/entercodefromemail" element={<EnterCodeFromEmail/>} />
        <Route path="/dashboard" element={<Dashboard/>} />


      </Routes>
    </Router>
  </React.StrictMode>,
);

