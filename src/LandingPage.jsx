import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <h1><i>EzLLM</i>: An Interactive eLearning Web Application for Neural Networks</h1>
            <p>
                Large language models (LLMs) have become the topic of discussion no matter what discipline you are in. I found it difficult to find a comprehensive yet simplified introduction to how these models work. <i><b>EzLLM</b></i> is an eLearning web application that will help people with no prior knowledge learn about neural networks and the transformer architecture.
            </p>
            <Link to="/newpage">
                <button>Go to New Page</button>
            </Link>
        </div>
    );
}

export default LandingPage;
