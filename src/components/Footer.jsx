import React from 'react';

function Footer() {
  return (
    <div className="bg-dark">
      <div className="row  w-100 p-5  d-flex justify-content-around ">
        <div className="col-sm-1 mt-4">
          <p className="fw-bold text-white text-center text-nowrap" id="p">
            Quick Links
          </p>
          <ul className="list-group p-2 text-center" id="quick">
            <li className="list-group-items p-1 text-nowrap">
              <a href="/" className="text-white">
                Sign In
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white">
                Careers
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white">
                Testimonials
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white text-nowrap">
                Privacy Policy
              </a>
            </li>
            <li
              className="list-group-items p-1"
              style={{ marginLeft: '-15px' }}
            >
              <a href="/" className="text-white text-nowrap ">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <hr id="line" />
        <div className="col-sm-1 mt-4  ">
          <p className="fw-bold text-white text-nowrap text-center" id="p">
            Our Products
          </p>
          <ul className="list-group p-2 text-center" id="quick">
            <li className="list-group-items">
              <a href="/" className="text-white p-1 text-nowrap">
                Transit Inn
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white text-nowrap">
                Loyalty Card
              </a>
            </li>
            <li className="list-group-items p-1">
              <a
                href="/"
                className="text-white text-nowrap"
                // style={{ marginLeft: '-10px' }}
              >
                Cargo Express
              </a>
            </li>
            <li className="list-group-items p-1">
              <a
                href="/"
                className="text-white text-nowrap"
                // style={{ marginLeft: '-12px' }}
              >
                Sprinter Service
              </a>
            </li>
            <li className="list-group-items p-1">
              <a
                href="/"
                className="text-white text-nowrap"
                // style={{ marginLeft: '-15px' }}
              >
                Coach West Africa
              </a>
            </li>
          </ul>
        </div>
        <hr id="line" />

        <div className="col-sm-1 mt-4">
          <p className="fw-bold text-white text-center" id="p">
            Help
          </p>
          <ul className="list-group p-2 text-center" id="quick">
            <li className="list-group-items p-1">
              <a href="/" className="text-white">
                FAQs
              </a>
            </li>
            <li className="list-group-items text-nowrap p-1">
              <a href="/" className="text-white">
                Contact Us
              </a>
            </li>

            <li className="list-group-items p-1">
              <a href="/" className="text-white">
                Feedback
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white text-nowrap">
                Travel History
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white text-nowrap">
                Confirm Phone Booking
              </a>
            </li>
          </ul>
        </div>
        <hr id="line" />

        <div className="col-sm-1 mt-4">
          <p className="fw-bold text-white text-center" id="p">
            Others
          </p>
          <ul className="list-group p-2 text-center" id="quick">
            <li className="list-group-items p-1">
              <a href="/" className="text-white">
                Gallery
              </a>
            </li>
            <li className="list-group-items text-nowrap p-1">
              <a href="/" className="text-white ">
                Agent Login
              </a>
            </li>
            <li className="list-group-items p-1">
              <a href="/" className="text-white">
                Schedules
              </a>
            </li>
            <li className="list-group-items p-1 text-nowrap">
              <a href="/" className="text-white">
                About Us
              </a>
            </li>

            <li className="list-group-items text-nowrap p-1">
              <a href="/" className="text-white  ">
                Agent Registration
              </a>
            </li>
          </ul>
        </div>
        <hr id="line" />

        <div className="col-sm-1 mt-4">
          <p className="fw-bold text-white text-center" id="p">
            Contact
          </p>
          <ul className="list-group text-white text-center p-1" id="quick">
            <li className="list-group-items text-nowrap">
              New York, NY 10012, US
            </li>
            <li className="list-group-items">
              <p href="/" className="text-white p-1">
                tomiwaakinbode@gmail.com
              </p>
            </li>
            <li className="list-group-items text-nowrap p-1">
              +234 90 766 514 87
            </li>
            <li className="list-group-items text-nowrap p-1">
              +234 81 380 259 61
            </li>
          </ul>
        </div>
        <hr style={{ color: 'red' }} />
        <div className="">
          <p className="text-white text-center text-nowrap">
            &copy; 2022 Copyright:{' '}
            <span className="fw-bold ">
              <a href="/" className="text-white">
                ABC Transport.
              </a>
            </span>
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
