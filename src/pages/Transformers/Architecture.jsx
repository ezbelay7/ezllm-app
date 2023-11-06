import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import transformerImage from '../../images/transformerarchitecture.png';

function Architecture() {

  return (
    <div className='page-div'>
      <h1>Decoding the Puzzle: Understanding the Transformer</h1>
      <br></br>
      <p>When delving into the intricacies of the decoder-only Transformer architecture, let's imagine trying to solve a massive, intricate puzzle. Each piece of this puzzle, with its unique shape and pattern, holds a key to the bigger picture—just as each word or token does in our data.</p>
      <br></br>
        <p>But where do we start? How do we know which pieces to put together? We need to find a way to understand the relationships between the pieces and the puzzle as a whole. We can't just randomly start putting pieces together and hope that they fit. We need to be able to understand the puzzle's context and the relationships between the pieces.</p>
    <img src={transformerImage} alt='transformer' />
      <br></br>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Architecture;
