import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
  }

  return (
    <div className="login-container">
      <h1>Log in</h1>
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
        Don’t have an account yet? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
