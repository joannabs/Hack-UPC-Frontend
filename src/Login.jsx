import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputValue);
  };

  return(
    <div className="Login">
      <form className="Auth-form"  onSubmit={handleSubmit}>
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
                    value={inputValue} 
                    onChange={handleInputChange}
                  />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
          {/* <button type="submit">Submit</button> */}
          <Link to="/home" state={{name: inputValue}} className="btn btn-primary">
            <button className="nav-button">Start!</button>
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
