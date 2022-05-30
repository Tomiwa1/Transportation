import React from 'react';
import play from './images/google-play.png';
import app from './images/app-store.png';

function Phone() {
  return (
    <>
      <div className="container text-start  text-white bg-primary p-5">
        <h4 className="text-break" style={{}}>
          Download the ABC app for easy booking.
        </h4>
        <p className="fw-light" style={{ maxWidth: '400px' }}>
          Conveniently manage your bookings, tickets, plan all your trips and
          enjoy discounts. ABC Transport App will help you buy tickets more
          easily.
        </p>
        <div className="col-sm-6">
          <img
            src={play}
            className="w-25 "
            alt=""
            style={{ width: '200px', marginLeft: '40px' }}
          />
        </div>
        <div className="col-sm-6">
          <img
            src={app}
            className=""
            alt=""
            style={{ width: '200px', marginTop: '-40px' }}
          />
        </div>
      </div>
    </>
  );
}

export default Phone;
