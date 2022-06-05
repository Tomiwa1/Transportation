import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import abc from './images/abclogo.png';
// import lady from './images/lady.jpg';
import './nav.css';
import './navlink.css';

// import logo from '../images/logo.jpeg.png';

function NavBar1() {
  const [ham, setHam] = useState(false);
  const onClick = () => {
    setHam(!ham);
  };

  return (
    <div id="bg">
      <nav className="navbar border border-white">
        <a className="navbar-brand " href="#">
          {/* <span
            className="fst-italic text-primary fw-bold"
            style={{
              // position: 'absolute',
              // top: '0',
              // marginTop: '5px',
              // padding: '5px',
              // fontSize: '30px'
            }}
          > */}
          <img
            src={abc}
            alt=""
            style={{ width: '80px', marginTop: '-10px', marginLeft: '5px' }}
          />
          {/* ABC Transport */}
          {/* </span> */}
        </a>
        {ham ? (
          <ul className="nav justify-center mt-4" id="links">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Manage Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Cargo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Hotel</a>
            </li>
            <li className="nav-item mx-2">
              <Link to="/login">
                <button className="btn text-white  btn-outline-primary text-primary">
                  Log in
                </button>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/sign-up">
                <button className="btn  btn-primary text-white">Sign Up</button>
              </Link>
            </li>
          </ul>
        ) : null}
        <ul className="nav justify-center mt-4" id="links1">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">Manage Booking</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">Explore</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">Cargo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">Hotel</a>
          </li>
          <li className="nav-item mx-2">
            <Link to="/login">
              <button className="btn text-white btn-outline-info text-primary">
                Log in
              </button>
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/sign-up">
              <button className="btn  btn-info text-white">Sign Up</button>
            </Link>
          </li>
        </ul>
        <button
          onClick={onClick}
          style={{
            display: 'block',
            position: 'absolute',
            right: '0',
            top: '0',
            padding: '5px',
            marginTop: '10px',
            marginRight: '20px'
          }}
        >
          <i
            className="fas fa-thin fa-bars text-white"
            style={{ fontSize: '40px' }}
            id="ham"
          ></i>
        </button>
      </nav>

      <div className=" container text-white p-5" id="text">
        <h1 className="fw-bold " style={{ fontSize: '300%' }}>
          Let us take you there
        </h1>
        <p className="fw-light">
          Pleasure or business, we will take you anywhere within West Africa in
          comfort and safety.
        </p>
        {/* <Link to="/form"> */}
        <button className="btn btn-info btn-lg">Book Now</button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default NavBar1;
