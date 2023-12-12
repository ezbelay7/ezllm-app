import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import transformerImage from '../../images/transformerarchitecture.png';

import '../../styles/architecture.css';

function Architecture() {
  const [selectedPart, setSelectedPart] = useState(null);

  const parts = {
    output: "From your imagined scenes and confidence levels, you now pick the most likely neighboring piece for each current piece, based on the highest confidence score. This gives you a clearer vision for your next steps as you continue the puzzle. In the end, our puzzle, with each piece meticulously placed and every detail scrutinized, mirrors the intricate process of the Transformer architecture.",
    softmax: "With the pieces now aligned according to the template, you take a moment to imagine possible images or scenes that the puzzle might depict. For each piece, you think of several potential neighboring pieces, assigning a confidence level to each. For instance, you're 80% sure this sky piece will be next to that cloud piece, 15% sure it might be next to a tree piece, and so on.",
    linear: "Once the entire iterative refinement process with the experts is complete, you feel confident about the general layout of your puzzle. Now, you have a unique template that helps you narrow down the precise position for each piece. Placing this template over your layout, it highlights where each piece should go, providing a clearer structure.",
    blocks: "After the initial round with the first set of experts and using your special filter, you indeed invite a new set of experts for another round. While these new experts have expertise in the same areas (like edges, colors, patterns), they approach the puzzle with the advantage of the groundwork and insights from the previous round. They might notice subtler details, nuances, or connections that the first team might have missed or deemed less critical. With each successive team of experts, the insights become more refined, nuanced, and layered, building upon the collective work of the previous rounds.",
    residualConnection: "When you're solving the puzzle, after receiving advice from experts, you don't discard the original layout you had started with. Instead, you merge their insights with your original placement. This combined information gives you both the benefit of their expert advice and the groundwork you initially set.",
    feedForward: "Think of your puzzle-solving process. After integrating advice from experts and adjusting your layout, you decide to give each piece a final touch-up. For this, you have a special tool—a filter. When you look at each puzzle piece through this filter, it accentuates specific features, making some patterns more distinct or bringing out colors more vividly. By enhancing each piece's characteristics individually, you make it clearer where it might belong in the overall picture. It doesn't change the piece's fundamental nature; it just refines and sharpens its features.",
    addNorm: "After you've integrated the expert advice and adjusted your puzzle layout, you use a special tool to smooth out and blend these combined insights. This tool ensures that there's no clash between the original placement and the new adjustments, making the image of the puzzle clearer and more consistent.",
    attention: "Imagine you have a team of experts helping you with the puzzle. Each expert focuses on different features: one is great with edge pieces, another is an expert in colors, yet another looks for specific patterns, and so on. Now, when working on a particular puzzle section, you use a curtain to hide sections of the puzzle you haven't reached yet. Each expert gives advice based on the visible pieces, but they're 'masked' or prevented from seeing future pieces. Their combined advice helps you understand the current section better.",
    positionalEncoding: "After categorizing and arranging the puzzle pieces by sections, you pin a small label on each piece that tells you which row or column it's likely to be in based on its characteristics. For instance, pieces with sky might be labeled towards the top rows, while pieces with ground or grass might be labeled towards the bottom rows. These labels don't give the exact position but provide a general idea about where they might fit in the bigger picture.",
    inputEmbedding: 'Instead of merely flipping and orienting each puzzle piece on a table, you now categorize and arrange the pieces by sections — perhaps edges, similar colors, or patterns. For instance, all the sky pieces go together, all the pieces with tree patterns are grouped, and so on. This gives you an organized starting point to begin solving the puzzle.'
  };

  const handlePartClick = (part) => {
    setSelectedPart(parts[part]);
  };

  return (
    <div className='architecture-page'>
      <h1>Decoding the Puzzle: Understanding the Transformer</h1>
      <p>When delving into the intricacies of the decoder-only Transformer architecture, let's imagine trying to solve a massive, intricate puzzle. Each piece of this puzzle, with its unique shape and pattern, holds a key to the bigger picture—just as each word or token does in our data.</p>
      <p><strong>Click on the components below to learn about the analogy!</strong></p>
      <div className="content-layout">
        <div className="image-container">
          <img src={transformerImage} alt='Transformer Architecture' className="architecture-image"/>
        </div>
        <div className="buttons-container">
          {/* Map through parts object keys to create buttons */}
          {Object.keys(parts).map((part) => (
            <button key={part} onClick={() => handlePartClick(part)} className="part-button">
              {part.replace(/^\w/, (c) => c.toUpperCase())} {/* Capitalize the first letter */}
            </button>
          ))}
        </div>
              <div className="description-container">
        {selectedPart && (
          <div className="part-description">
            <p>{selectedPart}</p>
          </div>
        )}
        </div>
      </div>
      <h3>Chat Component</h3>
      <p>Explore the Transformer architecture further with our interactive chatbot! The chatbot can provide additional insights and answer any questions you may have about the puzzle analogy and the Transformer model.</p>
      <Link to="/chatbot">
        <button>Chatbot</button>
      </Link>
    </div>
  );

}

export default Architecture;

// Add some styles in your CSS to arrange the layout
