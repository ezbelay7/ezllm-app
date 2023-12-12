// NavBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Import the CSS for styling

const NavBar = () => {
  return (
    <nav className="side-navbar">
        <h1><i>EzLLM</i></h1>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <div className="nav-section">
        <NavLink className="nav-link special-link" to="/neuralnetworks">
          Introduction to Neural Networks
        </NavLink>
        <NavLink className="nav-link" to="/singlelayerperceptron">
          Single Layer Perceptrons
        </NavLink>
        <NavLink className="nav-link" to="/lampanalogy">
          Lamp Analogy
        </NavLink>
      </div>
      <NavLink className="nav-link" to="/multilayerperceptron">
        Multilayer Perceptron
      </NavLink>
      <NavLink className="nav-link" to="/nnsimulator">
        MLP Simulator
      </NavLink>
      <NavLink className="nav-link special-link" to="/transformers">
        Diving Into Transformers
      </NavLink>
      <NavLink className="nav-link" to="/architecture">
        Transformer Architecture
      </NavLink>
      <NavLink className="nav-link" to="/chatbot">
        Chatting with BlenderBot
      </NavLink>
    </nav>
  );
};

export default NavBar;
