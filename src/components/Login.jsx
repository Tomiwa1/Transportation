import React from 'react';
import login from './images/Login.svg';
import { toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { BsKeyFill } from 'react-icons/bs';
import eyes from './images/prohibited-for-eyes.svg';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate('/page');
      }
    } catch (error) {
      toast.error('Wrong User Credentials');
    }
  };
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
              <form onSubmit={onSubmit}>
                <div className="input-group py-2" action="">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-3" id="basic-addon1">
                      <FiMail />
                    </span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="form-control"
                    placeholder="Email"
                    onChange={onChange}
                  />
                </div>

                <div className="input-group py-2" action="">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-3" id="basic-addon1">
                      <BsKeyFill />
                    </span>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    placeholder="Password"
                    className="form-control"
                    onChange={onChange}
                  />
                  {/* <div className="input-group-text"> */}
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    id="eyes"
                  />
                  {/* </div> */}
                  {/* <img
                    src={eyes}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    id="eyes"
                  /> */}
                </div>
                <div className="d-flex row mt-3">
                  <div className="col">
                    <p className="fw-light ">
                      Don't have an account?
                      <Link to="/sign-up" className="text-info">
                        Sign up
                      </Link>
                    </p>
                  </div>
                  <div className="col">
                    <Link
                      to="/forgot-password"
                      className="position-absolute p-1 end-0 text-info"
                    >
                      Forgot Password
                    </Link>
                  </div>
                </div>
                <div className="d-grid mt-5">
                  <button className=" btn btn-outline-info btn-lg">
                    <h4>Login</h4>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
