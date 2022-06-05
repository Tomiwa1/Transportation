import React from 'react';
import sign from './images/Sign_up.svg';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { BsKeyFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { BsPersonPlusFill } from 'react-icons/bs';

function SignUp() {
  return (
    <div>
      <div className="row mt-5 p-5">
        <div className="col-sm-6 mt-3">
          <img src={sign} alt="" />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center text-info">Sign-up</h1>
              <div className="input-group py-2" action="">
                <div class="input-group-prepend">
                  <span class="input-group-text p-3" id="basic-addon1">
                    <BsPersonFill />
                  </span>
                </div>
                <input
                  type="name"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="input-group py-2" action="">
                <div class="input-group-prepend">
                  <span class="input-group-text p-3" id="basic-addon1">
                    <BsPersonPlusFill />
                  </span>
                </div>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="input-group py-2" action="">
                <div class="input-group-prepend">
                  <span class="input-group-text p-3" id="basic-addon1">
                    <FiMail />
                  </span>
                </div>
                <input
                  type="email"
                  id="email"
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
                  id="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <p className="fw-light mt-3">
                Already have an account?
                <Link to="/login">
                  <a href="/">Login</a>
                </Link>
              </p>
              <div className="d-grid mt-5">
                <button className=" btn btn-outline-info btn-lg">
                  <h4>Sign Up</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
