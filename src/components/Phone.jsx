import React from 'react';
import play from './images/google-play.png';
import app from './images/app-store.png';

function Phone() {
  return (
    <>
      <div className="container text-start  text-white bg-primary p-5">
        <h4 className="">Download the ABC app for easy booking</h4>
        <p className="fw-light text-break">
          Conveniently manage your bookings, tickets, plan all your trips and
          enjoy discounts. ABC Transport App will help you buy tickets more
          easily
        </p>

        <div className="col">
          <img src={play} className="w-25 " alt="" style={{ width: '120px' }} />
        </div>
        <div className="col">
          <img src={app} className="" alt="" style={{ width: '200px' }} />
        </div>
      </div>
    </>
  );
}

export default Phone;
