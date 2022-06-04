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

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={} />
          <Route path="/form" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
        </Routes>
      </Router> */}
      <NavBar1 />
      <Form1 />
      <QuickBook />
      <Advantages />
      <Experience />
      <Phone />
      <Footer />
    </div>
  );
}

export default App;
