import React from 'react';

function Form1() {
  return (
    <div
      className="container shadow-lg p-3 bg-white mb-5 bg-body rounded "
      style={{ marginTop: '-120px' }}
    >
      <div className="mt-3 text-center">
        <h4 className="fw-bold text-primary"> CHOOSE YOUR DESTINATION</h4>
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
          <button className=" btn btn-outline-primary btn-lg">
            <h4>Search</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form1;
