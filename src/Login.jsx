import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => (
  <div className="Login">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Log In</h3>
        <div className="form-group mt-3">
          <div className="form-row">
            <div className="col">
              <label>Write a username to start</label>
                <input
                  type="username"
                  className="form-control mt-1"
                  placeholder="Enter the username"
                />
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 mt-3">
        <Link to="/home" className="btn btn-primary">
          <button className="nav-button">Start!</button>
        </Link>
        </div>
      </div>
    </form>
  </div>
);

export default Login;
