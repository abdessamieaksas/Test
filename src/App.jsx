import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Layout from './components/Layout';

function App() {
  return (
   
    <Router>
      <Routes>
        {/* Route for login */}
        <Route path="/" element={<Login />} />
        
        {/* Route for dashboard */}
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
