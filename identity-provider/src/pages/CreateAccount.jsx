import React, { useState } from 'react';
import './CreateAccount.css';
import {Link, useNavigate} from 'react-router-dom';


export default function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
  
    function handlePasswordChange(e) {
      const newPassword = e.target.value;
      setPassword(newPassword);
      validatePassword(newPassword);
    }
  
    function handleConfirmPasswordChange(e) {
      const newConfirmPassword = e.target.value;
      setConfirmPassword(newConfirmPassword);
      validateConfirmPassword(password, newConfirmPassword);
    }
  
    function validatePassword(password) {
      const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordCriteria.test(password)) {
        setPasswordError(
          'Your password should be at least 8 characters and should include a combination of numbers, letters, and special characters (!@$%^&*).'
        );
      } else {
        setPasswordError('');
      }
    }
  
    function validateConfirmPassword(password, confirmPassword) {
      if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match.');
      } else {
        setConfirmPasswordError('');
      }
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      if (!passwordError && !confirmPasswordError) {
        console.log('Form submitted:', { username, password, confirmPassword });
        const result = await fetch("https://localhost:3002/signup", {
          credentials: 'include',
          method: 'POST',
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({
            userName: username,
            password: password,
          })
        })

        if (result.status === 201) {
          navigate('/dashboard')
        } else {
          console.error("Sign up failed");
        }
      }
    }
  
    return (
      <div id="signup-container">
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {passwordError && <small className="error">{passwordError}</small>}
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "" : "👁️"}
              </span>
            </div>
            {confirmPasswordError && (
              <small className="error">{confirmPasswordError}</small>
            )}
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    );
  }
