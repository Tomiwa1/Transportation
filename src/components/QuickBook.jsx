import React from 'react';
import abuja from './images/abuja.jpg';
import calabar from './images/Calabar.jpg';
import owerri from './images/owerri.jpg';
import Port from './images/Port-Harcourt.jpg';
import lagos from './images/lagos.jpg';
import enugu from './images/ENUGU.jpg';
function QuickBook() {
  return (
    <>
      <div className=" p-5">
        <h2 className="text-primary">Quick Bookings </h2>
        <hr />
      </div>
      <div className="row px-5">
        <div className="col-sm-4  p-1">
          <img src={abuja} alt="abuja" id="abuja" />
        </div>
        <div className="col-sm-4  p-1">
          <img src={calabar} alt="calabar" id="calabar" />
        </div>
        <div className="col-sm-4  p-1">
          <img src={enugu} alt="owerri" id="owerri" />
        </div>
        <div className="col-sm-4  p-1">
          <img src={Port} alt="port-harcourt" id="port" />
        </div>
        <div className="col-sm-4  p-1">
          <img src={lagos} alt="lagos" id="lagos" />
        </div>
        <div className="col-sm-4 p-1">
          <img src={owerri} alt="enugu" id="enugu" />
        </div>
      </div>
    </>
  );
}

export default QuickBook;
