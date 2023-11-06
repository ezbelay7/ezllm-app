import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { Link } from 'react-router-dom';

import slpImage from '../../images/SLP.png';

function SingleLayerPerceptron() {

    return (
        <div>
            <h1>Single Layer Perceptron</h1>
            <br></br>
            <p>A single layer perceptron is the simplest type of artificial neural network, which consists
                 of just one layer of neurons that directly maps inputs to outputs. Don't worry if this seems 
                 daunting, we will walk through what each of the items in the diagram to our right are with an 
                 analogy for Inputs, Weights, Sum, Activation Function.</p>
            <br></br>
            <img src={slpImage} alt="Single Layer Perceptron" />
            <br></br>
            <br></br>
            <Link to="/lampanalogy">
                <button>Lamp Analogy</button>
            </Link>
        </div>
    );
}

export default SingleLayerPerceptron;
