import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { Link } from 'react-router-dom';

function NeuralNetworks() {

  return (
    <div>
      <h1>Introduction to Neural Networks</h1>
      <br></br>
      <h2 style={{textAlign: 'left'}}>What is a Neural Network?</h2>
      <p>A neural network is a computer system that's inspired by the way our brains work. Just like our brains 
        have tiny cells called neurons that communicate with each other to process information, a neural network 
        uses artificial neurons to process data. Each artificial neuron, like the one you see in the image, takes 
        in information, processes it, and then passes it on to the next neuron. These neurons work together in layers, 
        and they can learn and adapt over time, making neural networks really good at tasks like recognizing patterns 
        in images, understanding spoken language, or making decisions based on data. So, think of a neural network as a 
        digital brain that helps computers make sense of the world around them.</p>
      <img src='https://miro.medium.com/max/1400/1*QVIyc5HnGDWTNX3m-nIm9w.png' alt='neuron' />
      <br></br>
      <br></br>
      <Link to="/singlelayerperceptron">
        <button>Let's get started with Single Layer Perceptrons!</button>
      </Link>
    </div>
  );
}

export default NeuralNetworks;
