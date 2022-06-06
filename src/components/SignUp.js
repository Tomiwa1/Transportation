import React from 'react';
import sign from './images/Sign_up.svg';
import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { db } from '../firebase.config';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { BsKeyFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
// import { BsPersonPlusFill } from 'react-icons/bs';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = formData;
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      navigate('/page');
    } catch (error) {
      toast.error('Something Went Wrong');
    }
  };
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
              <form onSubmit={onSubmit}>
                <div className="input-group py-2" action="">
                  <div className="input-group-prepend">
                    <span className="input-group-text p-3" id="basic-addon1">
                      <BsPersonFill />
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className="form-control"
                    placeholder="First name"
                    onChange={onChange}
                  />
                </div>
                {/* <div className="input-group py-2" action="">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3" id="basic-addon1">
                      <BsPersonPlusFill />
                    </span>
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    className="form-control"
                    placeholder="Last name"
                    onChange={onChange}
                  />
                </div> */}
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
                </div>
                {/* </form> */}
                <p className="fw-light mt-3">
                  Already have an account?
                  <Link to="/login" className="text-info">
                    Login
                  </Link>
                </p>
                <div className="d-grid mt-5">
                  <button className=" btn btn-outline-info btn-lg">
                    <h4>Sign Up</h4>
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

export default SignUp;
