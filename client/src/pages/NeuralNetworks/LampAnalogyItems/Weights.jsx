import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import lampImage from '../../../images/lamp.png';

function Weights() {

  return (
    <div className='page-div'>
      <h1> Weights </h1>
      <br></br>
      <p>Just as not every day is sunny and not every night is dark, the importance of each electricity source for the lamp can change. Some days, solar energy might be the primary source, while on overcast days or nighttime, the batteries or direct power become more crucial. This preference for certain sources over others is analogous to the weights in a neural network. Weights dictate the importance or influence of each input. As a neural network learns from data, it adjusts these weights, refining which inputs should be prioritized to produce accurate predictions.</p>
      <img src={lampImage} alt='lamp' />
      <br></br>
      <br></br>
      <Link to="/lampanalogy">
        <button>Go back to Lamp Analogy</button>
      </Link>
    </div>
  );
}

export default Weights;