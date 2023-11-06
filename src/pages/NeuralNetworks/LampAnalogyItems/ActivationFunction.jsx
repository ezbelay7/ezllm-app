import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

function ActivationFunction() {

  return (
    <div className='page-div'>
      <h1>Activation Function</h1>
      <br></br>
      <p>Now, having summed up all its electricity, the lamp has a decision to make. 
        Should it remain off, glow dimly, or shine brightly? This decision, based on 
        the total electricity, is much like the activation function in neural networks. 
        It's the rule that determines how much signal the neuron should pass onto the 
        next layer based on the summed input. Whether it's deciding between off and on or 
        somewhere in between, the lamp's response to the combined electricity is akin to how 
        a neuron processes and transmits information through the network.</p>
      <img src={lampImage} alt='lamp' />
      <br></br>
      <br></br>
      <Link to="/lampanalogy">
        <button>Go back to Lamp Analogy</button>
      </Link>
    </div>
  );
}

export default ActivationFunction;