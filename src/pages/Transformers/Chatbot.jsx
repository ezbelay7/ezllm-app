import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import Chat from '../../components/Chat';

function Chatbot() {

    return (
        <div className='page-div'>
            <h1><strong>Chatting with BlenderBot</strong></h1>
            <br></br>
                <p>BlenderBot is an open-domain chatbot developed by Facebook AI Research (FAIR) designed to converse on a wide range of topics with human-like responses. It's called "Blender" because it's trained to blend various conversational skills, including empathy, knowledge, and personality, to create engaging dialogues. This bot is based on a large-scale transformer model known as the "BlenderBot 400M," where "400M" indicates the number of parameters used in the model — in this case, 400 million.</p>

                <p>BlenderBot was trained on a diverse dataset compiled from various sources to encompass a broad spectrum of conversational contexts. This dataset includes dialogues from crowd-sourced human conversations, discussions around specific topics, and exchanges designed to mimic certain personalities or emotive styles. By training on such a comprehensive corpus, BlenderBot can generate responses that are contextually relevant, informative, and maintain the flow of conversation in a manner that's coherent and contextually aware. It's also fine-tuned for tasks like next-word prediction to enhance its conversational fluidity, enabling it to predict and generate sequences of text that are plausible and contextually appropriate in a chat scenario.</p>
            <br></br>
            <h2>Chat below!</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '48%', paddingRight: '20px', paddingLeft: '20px' }}>
                    <p>The next word prediction is a process where the model uses the context of the conversation thus far to predict the most probable next word or sequence of words. This is similar to the way your smartphone might suggest the next word when you're typing a message. In the case of the BlenderBot 400M, this prediction is made by considering not just the immediate previous words but the entire context of the conversation, thanks to the transformer's ability to handle long-range dependencies in text.</p>
                    <p>AI hallucinations refer to instances where models generate incorrect or nonsensical information that isn't based on their training data or the input provided to them. This can occur due to the data that the model was trained on or the limitaitons of the model's understanding of complex human language and context. </p>
                    <p>For BlenderBot, hallucinations might manifest during conversations where the bot asserts facts or details that are either irrelevant, incorrect, or entirely fabricated. Despite its advanced capabilities and training on diverse datasets, BlenderBot can still fall prey to this issue, particularly when the dialogue steers into topics that are not conversational in nature. Try asking what 2+2 is! </p>
                </div>
                <div style={{ width: '48%' }}>
                    <Chat />
                </div>
            </div>
            
            <br></br>
            <br></br>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default Chatbot;

