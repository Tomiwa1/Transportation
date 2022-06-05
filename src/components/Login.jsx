import React from 'react';
import login from './images/Login.svg';
import { Link } from 'react-router-dom';

import { FiMail } from 'react-icons/fi';
import { BsKeyFill } from 'react-icons/bs';

function Login() {
  return (
    <div className="">
      <div className="row mt-5 p-5">
        <div className="col-sm-6">
          <img src={login} alt="" />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center text-info">Login</h1>
              <div className="input-group py-2" action="">
                <div class="input-group-prepend">
                  <span class="input-group-text p-3" id="basic-addon1">
                    <FiMail />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="input-group py-2" action="">
                <div class="input-group-prepend">
                  <span class="input-group-text p-3" id="basic-addon1">
                    <BsKeyFill />
                  </span>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <p className="fw-light mt-3">
                Don't have an account?{' '}
                <Link to="/sign-up">
                  <a href="/">Sign up</a>
                </Link>
              </p>
              <div className="d-grid mt-5">
                <button className=" btn btn-outline-info btn-lg">
                  <h4>Login</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
