import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Login.css';

function SSOLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const websiteDomain = useParams().domain;
  // const relyingPartyDomain = decodeURIComponent(useParams().domain);

  
  const hostURL = "https://localhost:3002";

  const apiSignup = hostURL+ "/signup";
  const apiLogin = hostURL+ "/SSO/login";
  const apiLogout = hostURL+ "/logout";

  const postSignupParams = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    credentials: 'include'
  };
  const postLoginParams = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    credentials: 'include'
  };
  const postLogoutParams = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    credentials: 'include'
  };
  
  function handleLogin(e) {
    e.preventDefault();
    if (!username) {
      setUsernameError("We couldn't find an account linked to that username");
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password incorrect. Please try again');
    } else {
      setPasswordError('');
    }
    loginUser({userName: username, password: password});
  }

  // FUNCTION
  async function loginUser(user) {
    try {
      const postLoginParamsWithBody = {
        ...postLoginParams,
        body: JSON.stringify({user, websiteDomain})
      };

      const response = await fetch(apiLogin, postLoginParamsWithBody);
      if (response.status === 200) {
        const responseData = await response.json();
        location.href = responseData.redirect + "/" + responseData.authorization;
        return true;
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }
  
  return (
    <div id="login-container">
      <h1>Log into Organization through Identity Provider</h1>
      <p>Hello, welcome back!</p>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <small className="error">{usernameError}</small>}
        </div>
        <div className="form-group">
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
      <p className="signup-link">
        Don’t have an account yet? <Link to="/create-account">Sign up</Link>
      </p>
    </div>
  );
}

export default SSOLogin;