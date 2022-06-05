import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './components/NavBar1';
import Form1 from './components/Form1';
import QuickBook from './components/QuickBook';
import Advantages from './components/Advantages';
import Experience from './components/Experience';
import Phone from './components/Phone';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar1 />
                <Form1 />
                <QuickBook />
                <Advantages />
                <Experience />
                <Phone />
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
