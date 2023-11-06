import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import NNImage from '../images/NN.png'

function Home() {

    return (
        <div>
            <div className='headerStyle'>
                <h1><i>EzLLM</i>: An Interactive eLearning Application for Neural Networks</h1>
            </div>
            <div className='missionStyle'>
                <h2>Mission of the project</h2>
                <p>
                    Large language models (LLMs) have become the topic of discussion no matter what discipline you are in. 
                    I found it difficult to find a comprehensive yet simplified introduction to how these models work. The 
                    resources currently available are geared towards those who already have at least some background in neural 
                    networks when explaining how LLMs work. <b><i>EzLLM</i></b> is an eLearning web application that will help 
                    people with no prior knowledge learn about neural networks and the transformer architecture using simplified 
                    analogies and interactive features, so that they can leave the application with an understanding of how GPT and other chatbots function.
                </p>
            </div>
            <div>
               <img src={NNImage} alt='neural network' className='imageStyle'/>
            </div>
            <div className='moduleStyle'>
                <Link to="/neuralnetworks">
                    <button className='buttonStyle'>Learn about Neural Networks!</button>
                </Link>
                <br></br>
                <Link to="/transformers">
                    <button className='buttonStyle'>Dive into Transformers!</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
