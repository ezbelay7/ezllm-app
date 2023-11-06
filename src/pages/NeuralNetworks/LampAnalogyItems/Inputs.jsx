import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { Link } from 'react-router-dom';

function Inputs() {

  return (
    <div>
      <h1> Inputs </h1>
      <br></br>
      <p>In our cozy room, the lamp can draw power from various sources: the solar panels that soak up sunlight, the batteries that store energy, and the ever-reliable direct power line. Each source represents a different way the lamp can receive electricity, much like the inputs to a neural network. In a neural network, these inputs can be anything from pixels in a photo to words in a sentence. They are the initial data points that the network processes, similar to how our lamp starts by considering the energy available from each electricity source.</p>
      <img src={lampImage} alt='lamp' />
      <br></br>
      <br></br>
      <Link to="/lampanalogy">
        <button>Go back to Lamp Analogy</button>
      </Link>
    </div>
  );
}

export default Inputs;