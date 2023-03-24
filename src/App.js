import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AnimatedRoutes from './app/components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
