import React from 'react';
import './App.css';
import Home from './app/components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './app/components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
