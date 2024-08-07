import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css';
import Landing from './pages/Landing.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Login from './pages/Login.jsx';
import ChangePassword from './pages/ChangePassword.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
