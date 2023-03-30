import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AnimatedRoutes from './app/components/AnimatedRoutes';
import Navbar from './app/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
