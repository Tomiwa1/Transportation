import React from 'react';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function DummyPage() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };
  return (
    <>
      <div className="text-success text-uppercase p-5">
        {user ? <h1>{user.displayName}</h1> : 'Not Logged In'}
      </div>
      <div className="container shadow-lg p-3 bg-white bg-body rounded mt-5">
        <div className="mt-3 text-center">
          <h4 className="fw-bold text-success"> CHOOSE YOUR DESTINATION</h4>
        </div>
        <div className="row p-5">
          <div className="col-sm-6 mt-1">
            <label htmlFor="Origin">
              <h4 className="fw-light">Departure Terminal</h4>
            </label>
            <select className="form-control" name="" id="">
              <option>Abuja</option>
              <option>Anambra</option>
              <option>Delta</option>
              <option>Lagos</option>
            </select>
          </div>
          <div className=" col-sm-6 mt-1">
            <label htmlFor="Origin">
              <h4 className="fw-light">Arrival Terminal</h4>
            </label>
            <select className="form-control" name="" id="">
              <option>Abuja</option>
              <option>Anambra</option>
              <option>Delta</option>
              <option>Lagos</option>
            </select>
          </div>
          <div className=" col col-sm-4 mt-2">
            <label htmlFor="Origin">
              <h4 className="fw-light">Departure Date</h4>
            </label>
            <input type="date" className="form-control" />
          </div>
          <div className="col col-sm-4 mt-2">
            <label htmlFor="Origin">
              <h4 className="fw-light">Arrival Date</h4>
            </label>
            <input type="date" className="form-control" />
          </div>
          <div className=" col-sm-4 mt-2">
            <label htmlFor="Origin">
              <h4 className="fw-light">Passengers</h4>
            </label>
            <select className="form-control" name="" id="">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
          </div>
          <div className="d-grid mt-5">
            <button className=" btn btn-outline-success btn-lg">
              <h4>Search</h4>
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 w-1">
        <Link to="/" className="text-success">
          <h5>Back to home</h5>
        </Link>
        <div className="position-absolute end-0 p-3">
          {/* <Link to="/"> */}
          <button className="btn btn-outline-success" onClick={onLogout}>
            Logout
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default DummyPage;
