import React from 'react';
import lady from './images/lady.jpg';
import { FaCheckCircle } from 'react-icons/fa';

function Experience() {
  return (
    <>
      <div className="d-flex row">
        <div className=" col-sm-6 p-1 order-2 order-sm-1">
          <img src={lady} alt="" />
        </div>

        <div className=" col-sm-6 p-5 order-1 order-sm-2">
          <h2 className="text-info">Comfortable Travel Experience</h2>
          <hr />
          <p className="fw-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using "Content here,content
            here", making it look like readable English. Many desktop publishing
            packages.
          </p>
          <div className="row">
            <div className="d-flex col-6">
              <FaCheckCircle className="text-info mt-1" />
              <p className="fw-bold mx-3">Charging Port.</p>
            </div>
            <div className="d-flex col-6">
              <FaCheckCircle className="text-info mt-1" />
              <p className="fw-bold mx-3">Safety Conscious.</p>
            </div>
            <div className="d-flex col-6">
              <FaCheckCircle className="text-info mt-1" />
              <p className="fw-bold mx-3">Emergency Exit.</p>
            </div>
            <div className="d-flex col-6">
              <FaCheckCircle className="text-info mt-1" />
              <p className="fw-bold mx-3">More Leg Room.</p>
            </div>
            <div className="d-flex col-6">
              <FaCheckCircle className="text-info mt-1" />
              <p className="fw-bold mx-3">Fire Extinguisher.</p>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-info btn-">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
