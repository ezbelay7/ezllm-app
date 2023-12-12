import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import NNImage from '../images/NN.png'
import { motion } from 'framer-motion'

function Home() {

    return (
        <div>
            <div className='headerStyle'>
                <motion.h1 animate={{ y: 20, opacity: 1 }} initial={{ y: -20, opacity: 0 }} transition={{ duration: 0.5 }}><i>EzLLM</i>: An Interactive eLearning Application for Neural Networks</motion.h1>
            </div>
            <div className = 'moduleStyle'>
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
                <div className='missionStyle'>
                    <h2>What are AI, ML, and NLP?</h2>
                    <p>                  
                        Artificial Intelligence (AI) is a broad area of computer science focused on creating smart machines capable of performing tasks that typically require human intelligence. Machine Learning (ML), a subset of AI, is the method of training computers to learn from and make decisions based on data, improving their knowledge over time without being explicitly programmed for each task. Natural Language Processing (NLP), which is an intersection of AI and linguistics, involves programming computers to process and understand human language, enabling them to perform tasks like translation, sentiment analysis, and conversation. Together, AI, ML, and NLP form the backbone of many modern technologies, from search engines and virtual assistants to more complex systems like autonomous vehicles and personalized healthcare recommendations.
                    </p>
                </div>
            </div>
            
            <br></br>
            <br></br>
            <motion.div animate={{ scale: 1.2 }} transition={{ duration: 1 }} whileHover={{ scale: 1.5 }}>
                <img src={NNImage} alt='neural network' className='imageStyle'/>
            </motion.div>
            <div className='moduleStyle'>
                <Link to="/neuralnetworks">
                    <motion.button animate={{ y: 10, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 0.5 }} className='buttonStyle'>Learn about Neural Networks!</motion.button>
                </Link>
                <br></br>
                <Link to="/transformers">
                    <motion.button animate={{ y: 10, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 0.5 }} className='buttonStyle'>Dive into Transformers!</motion.button>
                </Link>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default Home;
