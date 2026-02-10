import React, { useState } from 'react';
import { Mail, Lock, KeyRound } from 'lucide-react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Add authentication logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          {/* Simple CSS/Text representation of the logo */}
          <div className="logo-text">
            <span className="logo-swish">S</span> {/* Placeholder for graphical element check if needs better replacement */}
            <span className="logo-bill">bill</span>
            <span className="logo-dme">DME</span>
          </div>
          <div className="logo-subtitle">PROVIDER SUITE</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-icon-wrapper">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon-wrapper">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit" className="login-button">
            <Lock size={18} />
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
