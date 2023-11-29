import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { Link } from 'react-router-dom';

function Transformers() {

  return (
    <div className='page-div'>
      <h1>Diving Into Transformers</h1>
      <br></br>
      <h2 style={{textAlign: 'left'}}>What is a Transformer?</h2>
      <p>A transformer is a remarkable technology used in computers to understand and process language and various types of data. It gets its name because it has the ability to transform the way computers analyze information. Imagine it as a versatile tool that can magically grasp the context and relationships between words or pieces of information. Unlike older computer methods, transformers don't rely on rigid rules or patterns; instead, they learn from vast amounts of data and adapt to new situations. Just like how we humans can understand the meaning of a sentence, even if we've never heard it before, transformers can make sense of words and their connections in a flexible and intelligent way.</p>

    <p>We focus on "decoder-only" transformers, like the ones in GPT, because they're great at generating text without needing to understand the input first. They skip the part where they figure out what the input means and go straight to creating text. This is super helpful for tasks like writing articles, answering questions, or even making up stories! lets look at the different parts with another analogy!</p>
      <br></br>
      <br></br>
      <Link to="/architecture">
        <button>Transformer Architecture</button>
      </Link>
    </div>
  );
}

export default Transformers;
