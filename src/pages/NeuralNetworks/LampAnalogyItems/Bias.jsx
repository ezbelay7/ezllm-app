import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { Link } from 'react-router-dom';

function Bias() {

  return (
    <div>
      <h1> Bias </h1>
      <br></br>
      <p>Imagine there's a baseline amount of energy the lamp needs to even consider lighting up, regardless of the electricity sources. Even if there's a tiny bit of power, the lamp might decide it's better to stay off than emit a dim, barely visible light. This is the bias in our analogy. In neural networks, the bias term acts as an offset, ensuring that a neuron can still produce an output even if the summed input is low. It adjusts the threshold at which a neuron activates.</p>
      <img src={lampImage} alt='lamp' />
      <br></br>
      <br></br>
      <Link to="/lampanalogy">
        <button>Go back to Lamp Analogy</button>
      </Link>
    </div>
  );
}

export default Bias;