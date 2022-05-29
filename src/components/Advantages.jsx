import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { faEarlybirds } from '@fortawesome/free-solid-svg-icons';
import { FaEarlybirds } from 'react-icons/fa';
import { FaIdCard } from 'react-icons/fa';

function Advantages() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-primary"> Our Advantages</h2>
        <hr />
      </div>
      <div className="row px-5 justify-content-center">
        <div className="card col-sm-3 shadow-lg p-3 m-2  bg-white text-center p-1">
          <div className="d-flex justify-content-center">
            <FaEarlybirds className="text-primary fs-1" />
          </div>
          <h4 className="mt-2 fw-normal">Kid's Discount</h4>
          <p className="fw-light">
            Kid below the age of 12 and students within West Africa region get a
            rebate for every ticket, even Youth Corpers
          </p>
        </div>
        <div className="card col-sm-3 shadow-lg p-3 m-2 bg-white text-center ">
          <FontAwesomeIcon icon={faTrophy} className="text-primary fs-1" />
          <h4 className="mt-2 fw-normal">Best Industry Award</h4>
          <p className="fw-light">
            2015-CITL Pioneer Luxury Bus Operator on the international (West
            Coach, Africa).
          </p>
        </div>
        <div className="card col-sm-3 shadow-lg p-3 m-2 bg-white text-center">
          <div className="d-flex justify-content-center">
            <FaIdCard className="text-primary fs-1" />
          </div>
          <h4 className="mt-2 fw-normal">Loyalty Cards</h4>
          <p className="fw-light">
            Complete 10 trips in a year and get your 11th trip free. You will
            also automatically become a gold customer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Advantages;
