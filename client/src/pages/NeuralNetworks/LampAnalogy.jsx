import React from 'react';

import { Link } from 'react-router-dom';

import lampImage from '../../images/lamp.png';  

function LampAnalogy() {

  return (
    <div className='page-div'>
      <h1>Single Layer Perceptron Analogy: Lamp</h1>
      <br></br>
      <h2 style={{textAlign: 'left'}}>Analogy for Artificial Neural Networks</h2>
      <p>Imagine a cozy room where the ambiance is set by a single lamp. This lamp's brightness isn't 
        just controlled by an on-off switch; instead, it depends on various sources of electricity it 
        can tap into: solar panels catching the day's sunlight, batteries charged and ready for use, 
        and a direct power line. The lamp intelligently decides how much electricity to draw from each 
        source and whether it should light up at all. This room, with its unique lamp, serves as our 
        analogy for understanding the intricate components and functioning of a neural network. Let's 
        explore this analogy further.</p>
      <img src={lampImage} alt='lamp' />
      <br></br>
      <Link to="/activationfunction">
        <button>Activation Functions</button>
      </Link>
      <br></br>
      <Link to="/bias">
        <button>Bias</button>
      </Link>
      <Link to="/inputs">
        <button>Inputs</button>
      </Link>
      <Link to="/weights">
        <button>Weights</button>
      </Link>
      <br></br>
      <Link to="/summation">
        <button>Summation</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/multilayerperceptron">
        <button>Let's move on to Multilayer Perceptrons!</button>
      </Link>
    </div>
  );
}

export default LampAnalogy;