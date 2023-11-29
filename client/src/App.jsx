import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';


import NavBar from './components/NavBar';

import Home from './pages/Home';
import NeuralNetworks from './pages/NeuralNetworks/NeuralNetworks';
import NNSimulator from './pages/NeuralNetworks/NNSimulator';
import SingleLayerPerceptron from './pages/NeuralNetworks/SingleLayerPerceptron';
import LampAnalogy from './pages/NeuralNetworks/LampAnalogy';
import MultilayerPerceptron from './pages/NeuralNetworks/MultilayerPerceptron';
import ActivationFunction from './pages/NeuralNetworks/LampAnalogyItems/ActivationFunction';
import Bias from './pages/NeuralNetworks/LampAnalogyItems/Bias';
import Inputs from './pages/NeuralNetworks/LampAnalogyItems/Inputs';
import Summation from './pages/NeuralNetworks/LampAnalogyItems/Summation';
import Weights from './pages/NeuralNetworks/LampAnalogyItems/Weights';
import Transformers from './pages/Transformers/Transformers';
import Architecture from './pages/Transformers/Architecture';



// const fetchTestEndpoint = async () => {
//   try {
//     const response = await fetch('/api/test');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };


function App() {
  // useEffect(() => {
  //   fetchTestEndpoint();
  // }, []);
  
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
          <Route path="/activationfunction" element={<ActivationFunction />} />
          <Route path="/bias" element={<Bias />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/summation" element={<Summation />} />
          <Route path="/weights" element={<Weights />} />
          <Route path="/transformers" element={<Transformers />} />
          <Route path="/architecture" element={<Architecture />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;