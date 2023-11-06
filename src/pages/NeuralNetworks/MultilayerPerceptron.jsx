import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/multilayerperceptron.css';

function MultilayerPerceptron() {
  return (
    <div className='mlp-container'>
      <h1>Multilayer Perceptron</h1>
      
      <p>
        Let's build upon the understanding of a single-layer perceptron to explore the concept of a multilayer
        perceptron (MLP), which is essentially a neural network with more than one layer of neurons.
      </p>
      
      <p>
        A multilayer perceptron takes in data, processes it through multiple layers of weighted sums and activation
        functions, and produces an output. The network then learns from its errors by adjusting the weights and
        biases through backpropagation to better map inputs to the correct outputs. Over multiple iterations, the
        network hones its parameters to accurately model the underlying relationship in the data.
      </p>
      
      <h2>An MLP consists of three main types of layers:</h2>
      
      <ul>
        <li><strong>Input Layer:</strong> The layer that receives the initial data for the network to process.</li>
        <li><strong>Hidden Layers:</strong> The layers between the input and output layers where intermediate computations and transformations occur.</li>
        <li><strong>Output Layer:</strong> The layer that produces the final result or prediction of the network.</li>
      </ul>
      
      <h2>Here's how a multilayer perceptron works:</h2>
      
      <h3>Input Layer:</h3>
      <p>The input layer receives the initial data. Each neuron in this layer represents a feature of the data. If you were processing images, each neuron might represent a pixel's intensity.</p>
      
      <h3>Hidden Layers:</h3>
      <p><strong>Explanation:</strong> The data from the input layer is then passed on to one or more hidden layers, where the real computation and model learning happen.</p>
      <p>In each hidden layer, the following occurs:</p>
      <ul>
        <li><strong>Weights and Bias:</strong> Just like in a single-layer perceptron, each neuron receives inputs from all neurons in the previous layer. These inputs are adjusted by weights and a bias is added.</li>
        <li><strong>Activation Function:</strong> The weighted sum of inputs plus the bias is then passed through an activation function, which decides the neuron's output.</li>
        <li><strong>Propagation:</strong> The output of each neuron is then passed on as inputs to neurons in the next layer.</li>
      </ul>
      
      <h3>Output Layer:</h3>
      <p><strong>Explanation:</strong> After the data has passed through the hidden layers, it reaches the output layer. The output layer produces the final result or prediction of the network.</p>
      <br></br>
      <div className='centered-div'>
        <img src='https://miro.medium.com/max/1400/1*QVIyc5HnGDWTNX3m-nIm9w.png' alt='neuron' />      
        <br></br>
        <br></br>
        <Link to="/nnsimulator">
            <button className='mlp-simulator-button'>MLP Simulator</button>
        </Link>
      </div>
    </div>
    
  );
}

export default MultilayerPerceptron;
