import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

function Summation() {

  return (
    <div className='page-div'>
      <h1> Summation </h1>
      <br></br>
      <p>When the lamp decides to light up, it doesn't randomly choose an electricity source. Instead, it combines the energy from all available sources. Some might contribute more, others less, but in the end, they all play a part in determining the total available electricity. This process mirrors the summation in neural networks, where each input (multiplied by its respective weight) is added together to provide a cumulative value or signal.</p>
      <img src={lampImage} alt='lamp' />
      <br></br>
      <br></br>
      <Link to="/lampanalogy">
        <button>Go back to Lamp Analogy</button>
      </Link>
    </div>
  );
}

export default Summation;