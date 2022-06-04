import React from 'react';
import './nav.css';
import google from './images/jujule.svg';
import phone from './images/phone.png';
import { FaApple } from 'react-icons/fa';
import sprint from './images/sprinter-logo.png';
import west from './images/west.jpg';
import cargo from './images/cargo.png';
import transit from './images/transit.jpg';

function Phone() {
  return (
    <>
      <div className="container rounded-3  text-white bg-info" id="container">
        <h4 className="fw-bold">Download the ABC app for easy booking.</h4>
        <p className="fw-light" style={{ maxWidth: '400px' }}>
          Conveniently manage your bookings, tickets, plan all your trips and
          enjoy discounts. ABC Transport App will help you buy tickets more
          easily.
        </p>
        <div className="row">
          <div className="col-sm-2 p-1">
            <button className="d-flex flex-column btn text-white" id="app-btn">
              <p id="app-store">Download on the App Store</p>
              <div id="apple">
                <FaApple />
              </div>
            </button>
          </div>
          <div className="col-sm-2 p-1">
            <button className="btn text-white" id="play-btn">
              <p id="play-text">Download on the Play Store</p>
              <div id="play">
                <img src={google} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id="phone">
        <img src={phone} alt="" />
      </div>
      <div className=" mt-5 pt-5">
        <div className="row p-5" id="buuga">
          <div className="col mt-5">
            <img src={sprint} alt="" id="buga" />
          </div>
          <div className="col mt-5">
            <img src={west} alt="" id="buga" />
          </div>
          <div className="col mt-5">
            <img src={cargo} alt="" id="buga" />
          </div>
          <div className="col mt-5">
            <img src={transit} alt="" id="buga" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Phone;
