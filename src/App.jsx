import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import NeuralNetworks from './pages/NeuralNetworks/NeuralNetworks';
import NNSimulator from './pages/NeuralNetworks/NNSimulator';
import SingleLayerPerceptron from './pages/NeuralNetworks/SingleLayerPerceptron';
import LampAnalogy from './pages/NeuralNetworks/LampAnalogy';
import MultilayerPerceptron from './pages/NeuralNetworks/MultilayerPerceptron';
import Transformers from './pages/Transformers/Transformers';
import Architecture from './pages/Transformers/Architecture';
import Chatbot from './pages/Transformers/Chatbot';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="page-content">
        <Routes>
          {/* make the paths more modular (/home, /neuralnetworks/nnsimulator, /neuralnetworks/slp, etc.) */}
          <Route path="/" element={<Home />} />
          <Route path="/neuralnetworks" element={<NeuralNetworks />} />
          <Route path="/nnsimulator" element={<NNSimulator />} />
          <Route path="/singlelayerperceptron" element={<SingleLayerPerceptron />} />
          <Route path="/lampanalogy" element={<LampAnalogy />} />
          <Route path="/multilayerperceptron" element={<MultilayerPerceptron />} /> 
          <Route path="/transformers" element={<Transformers />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/chatbot" element={<Chatbot />} />

        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
