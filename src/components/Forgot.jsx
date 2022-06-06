import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiMail } from 'react-icons/fi';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

function Forgot() {
  const [email, setEmail] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email has been sent.');
    } catch (error) {
      toast.error('Could not send Email');
    }
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="text-success p-5 mt-5">
        <h2>Forgot Password</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="container input-group  p-5" action="">
          <div className="input-group-prepend">
            <span className="input-group-text p-3" id="basic-addon1">
              <FiMail />
            </span>
          </div>
          <input
            onChange={onChange}
            type="email"
            id="email"
            // value={email}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="p-2">
          <button className=" btn btn-outline-success">Reset Password</button>
          <Link
            to="/login"
            className="p-2 text-success position-absolute end-0"
          >
            <p>Login</p>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Forgot;
