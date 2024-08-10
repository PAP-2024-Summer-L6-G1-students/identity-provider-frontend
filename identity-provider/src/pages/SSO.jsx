import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid
import './SSOPage.css';

function SSOPage() {
  const [formData, setFormData] = useState({
    websiteDomain: '',
    signUpRedirect: '',
    signInRedirect: ''
  });

  const [accessPermissions, setAccessPermissions] = useState({
    username: false,
    name: false,
    email: false,
    phone: false,
    streetAddress: false
  });

  const [apiKey, setApiKey] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setAccessPermissions(prev => ({ ...prev, [name]: checked }));
  }

  function generateApiKey() {
    const key = uuidv4(); 
    setApiKey(key);
    alert(`Your new API key is: ${key}`);
  }

  return (
    <div className="container">
      <form className="form">
        <h1 className="title">Create an SSO button for your website</h1>
        <input className="input" placeholder="Website Domain" name="websiteDomain" value={formData.websiteDomain} onChange={handleInputChange} />
        <input className="input" placeholder="After Sign-Up Redirect Page" name="signUpRedirect" value={formData.signUpRedirect} onChange={handleInputChange} />
        <input className="input" placeholder="After Sign-In Redirect Page" name="signInRedirect" value={formData.signInRedirect} onChange={handleInputChange} />

        <input type="checkbox" className="checkbox" id="username" name="username" checked={accessPermissions.username} onChange={handleCheckboxChange} />
        <label htmlFor="username" className="label">Username</label>
        
        <input type="checkbox" className="checkbox" id="name" name="name" checked={accessPermissions.name} onChange={handleCheckboxChange} />
        <label htmlFor="name" className="label">Name</label>
        
        <input type="checkbox" className="checkbox" id="email" name="email" checked={accessPermissions.email} onChange={handleCheckboxChange} />
        <label htmlFor="email" className="label">Email Address</label>
        
        <input type="checkbox" className="checkbox" id="phone" name="phone" checked={accessPermissions.phone} onChange={handleCheckboxChange} />
        <label htmlFor="phone" className="label">Phone Number</label>
        
        <input type="checkbox" className="checkbox" id="streetAddress" name="streetAddress" checked={accessPermissions.streetAddress} onChange={handleCheckboxChange} />
        <label htmlFor="streetAddress" className="label">Street Address</label>
        
        <button type="button" className="button" onClick={generateApiKey}>Generate API Key</button>
        <button type="button" className="button">Generate SSO Button</button>
      </form>
    </div>
  );
}

export default SSOPage;
