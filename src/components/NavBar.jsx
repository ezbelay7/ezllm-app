// NavBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Import the CSS for styling

const NavBar = () => {
  return (
    <nav className="side-navbar">
        <h1><i>EzLLM</i></h1>
        {/* Main links */}
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      {/* Nested links for Neural Networks section */}
      <div className="nav-section">
        <NavLink className="nav-link" to="/neuralnetworks">
          Introduction to Neural Networks
        </NavLink>
        <NavLink className="nav-link" to="/singlelayerperceptron">
          Single Layer Perceptrons
        </NavLink>
        <NavLink className="nav-link" to="/lampanalogy">
          Lamp Analogy
        </NavLink>
        {/* Add other nested links similarly */}
      </div>
      {/* Other main links */}
      <NavLink className="nav-link" to="/multilayerperceptron">
        Multilayer Perceptron
      </NavLink>
      <NavLink className="nav-link" to="/nnsimulator">
        MLP Simulator
      </NavLink>
      <NavLink className="nav-link" to="/transformers">
        Diving Into Transformers
      </NavLink>
      {/* Add other links as needed */}
    </nav>
  );
};

export default NavBar;
