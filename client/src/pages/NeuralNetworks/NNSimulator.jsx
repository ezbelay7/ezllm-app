import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../../styles/multilayerperceptron.css';

import { Link } from 'react-router-dom';

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function NNSimulator() {
  const svgRef = useRef(null);
  const slidersRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Define nodes
    const nodes = [
      { id: 'I1', layer: 1, pos: 1 },
      { id: 'I2', layer: 1, pos: 2 },
      { id: 'H1', layer: 2, pos: 1 },
      { id: 'H2', layer: 2, pos: 2 },
      { id: 'O', layer: 3, pos: 1.5 },
    ];

    // Define links between nodes
    const links = [
      { source: 'I1', target: 'H1' },
      { source: 'I1', target: 'H2' },
      { source: 'I2', target: 'H1' },
      { source: 'I2', target: 'H2' },
      { source: 'H1', target: 'O' },
      { source: 'H2', target: 'O' },
    ];
    

    function calculateOutput(svg, nodes) {
      // Grab the weights from the sliders
      const I1_H1_weight = parseFloat(d3.select('.I1-H1-slider input[type="range"]').property('value'));
      const I1_H2_weight = parseFloat(d3.select('.I1-H2-slider input[type="range"]').property('value'));
      const I2_H1_weight = parseFloat(d3.select('.I2-H1-slider input[type="range"]').property('value'));
      const I2_H2_weight = parseFloat(d3.select('.I2-H2-slider input[type="range"]').property('value'));
      const H1_O_weight = parseFloat(d3.select('.H1-O-slider input[type="range"]').property('value'));
      const H2_O_weight = parseFloat(d3.select('.H2-O-slider input[type="range"]').property('value'));
      
      // Given the inputs
      const I1_value = 1;
      const I2_value = 3;
      svg.selectAll('.input-text').remove(); 
      svg.append('text')
        .attr('class', 'input-text')
        .attr('x', nodes.find((n) => n.id === 'I1').layer * (width / 4)+ 90)
        .attr('y', nodes.find((n) => n.id === 'I1').pos * (height / 3) - 50)
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .text(`I1 (Genre Interest) = ${I1_value}`)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .style('fill', 'orange');
      svg.append('text')
        .attr('class', 'input-text')
        .attr('x', nodes.find((n) => n.id === 'I2').layer * (width / 4) + 120)
        .attr('y', nodes.find((n) => n.id === 'I2').pos * (height / 3) + 55)
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .text(`I2 (Number of Friend's Approval) = ${I2_value}`)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .style('fill', 'orange');
      
        
    
      // Compute hidden node values using the sigmoid activation function
      const H1_value = sigmoid(I1_value * I1_H1_weight + I2_value * I2_H1_weight);
      const H2_value = sigmoid(I1_value * I1_H2_weight + I2_value * I2_H2_weight);
      
      // Compute the output
      const O_value = sigmoid(H1_value * H1_O_weight + H2_value * H2_O_weight);
    
      // Display the output on the SVG
      svg.selectAll('.output-text').remove();  // Remove any previous text
      svg.append('text')
        .attr('class', 'output-text')
        .attr('x', nodes.find((n) => n.id === 'O').layer * (svgRef.current.clientWidth / 4))
        .attr('y', nodes.find((n) => n.id === 'O').pos * (svgRef.current.clientHeight / 3) + 50)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .text(`Output = ${O_value.toFixed(2)}`)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .style('fill', 'orange');
    }

    // Draw links
    svg.selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('id', (d) => `${d.source}-${d.target}-line`)
      .attr('x1', (d) => nodes.find((n) => n.id === d.source).layer * (width / 4))
      .attr('y1', (d) => nodes.find((n) => n.id === d.source).pos * (height / 3))
      .attr('x2', (d) => nodes.find((n) => n.id === d.target).layer * (width / 4))
      .attr('y2', (d) => nodes.find((n) => n.id === d.target).pos * (height / 3))
      .style('stroke', '#646cff')
      .style('stroke-width', 5.25);
      
    // Draw nodes
    svg.selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('cx', (d) => d.layer * (width / 4))
    .attr('cy', (d) => d.pos * (height / 3))
    .attr('r', 35)
    .style('fill', 'lightblue')
    .on('mouseover', function(event, d) {
      // Define the tooltip text based on the node ID
      let tooltipText = "";
      switch(d.id) {
        case 'I1':
          tooltipText = "Measures how much the user likes the genre of the new movie.";
          break;
        case 'I2':
          tooltipText = "Represents the number of friends who liked the movie.";
          break;
        case 'H1':
          tooltipText = "Factors in both genre interest and friends' approval to weigh their combined importance.";
          break;
        case 'H2':
          tooltipText = "Considers the number of friends who liked the movie, indicating the importance of social proof.";
          break;
        case 'O':
          tooltipText = "Gives the probability that the user will enjoy the movie.";
          break;
        default:
          tooltipText = "";
      }
      // Display the tooltip
      d3.select(this)
        .append('title')
        .text(tooltipText);
    })
    .on('mouseout', function() {
      // Remove the tooltip on mouseout
      d3.select(this).select('title').remove();
    })
    .on('click', function(event, d) {
      // Define the information text based on the node ID
      let infoText = "";
      switch(d.id) {
        case 'I1':
          infoText = "Measures how much the user likes the genre of the new movie.";
          break;
        case 'I2':
          infoText = "Represents the number of friends who liked the movie.";
          break;
        case 'H1':
          infoText = "Factors in both genre interest and friends' approval to weigh their combined importance.";
          break;
        case 'H2':
          infoText = "Considers the number of friends who liked the movie, indicating the importance of social proof.";
          break;
        case 'O':
          infoText = "O: Gives the probability that the user will enjoy the movie.";
          break;
        default:
          infoText = "";
      }
      // Update the node-info div with the information
      d3.select('.node-info').text(infoText);
    });
  
    // add labels to nodes
    svg.selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', (d) => d.layer * (width / 4))
      .attr('y', (d) => d.pos * (height / 3))
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.id)
      .style('font-size', '25px')
      .style('font-weight', 'bold')
      .style('fill', 'black');

    // add sliders to toggle stroke width of lines
    d3.select(slidersRef.current).selectAll('div')
      .data(links)
      .enter()
      .append('div')
      .attr('class', (d) => `slider-container ${d.source}-${d.target}-slider`)
      .each(function (d) {
        const source = d.source;
        const target = d.target;
        const sliderContainer = d3.select(this);

        const inputContainer = sliderContainer.append('div')
          .attr('class', 'input-container')
          .style('display', 'flex')
          .style('align-items', 'center');
        inputContainer.append('input')
          .attr('type', 'text')
          .attr('value', `${source}-${target}`)
          .attr('readonly', true)
          .style('margin-right', '10px')
          .style('font-size', '20px') 
          .style('width', '100px')
          .style('text-align', 'center');
        const slider = inputContainer.append('input')
          .attr('type', 'range')
          .attr('min', -1)
          .attr('max', 1)
          .attr('value', 0)
          .attr('step', 0.1)
          .style('width', '250px') 
          .style('accent-color', '#646cff')
          .attr('transform', 'translate(10, 10)')
          .on('input', function () {
            const source = d.source;
            const target = d.target;
            const strokeWidthScale = d3.scaleLinear()
              .domain([-1, 1])
              .range([0.5, 15]);
            const strokeWidth = strokeWidthScale(this.value);
            svg.select(`#${source}-${target}-line`)
              .style('stroke-width', strokeWidth);
            span.text(this.value);
            calculateOutput(svg, nodes);
          });
        const span = inputContainer.append('span')
          .text(slider.property('value'))
          .style('margin-left', '10px')
          .style('font-size', '20px');
      });

      calculateOutput(svg, nodes);

    }, []);

  return (
    <div className='mlp-container'>
      <h1>Neural Network Simulator</h1>
      <h2>Scenario: Movie Recommendation System</h2>
      <h3>Inputs</h3>
      <ul>
        <li><strong>I1 (Genre Interest):</strong> This measures how much the user generally likes the genre of the new movie. This can be a value between 0 (hates the genre) and 1 (loves the genre). In this case, I1 = 1 means the user absolutely loves the genre of the new movie.</li>
        <li><strong>I2 (Friends' Approval): </strong>  This represents the number of the user's friends who liked the movie. The higher the number, the more friends recommend it. The number can be any positive integer or zero. For our example, I2 = 3 means three of the user's friends recommend the movie.</li>
      </ul>
      <h3>Hidden Nodes</h3>
      <ul>
        <li><strong>H1:</strong>This node might factor in the influence of both the genre interest and friends' approval to weigh their combined importance. For example, if H1 leans more towards genre interest, it implies that the genre is a dominant factor in predicting the user's liking.</li>
        <li><strong>H2: </strong> This node might lean more towards considering the number of friends who liked the movie, indicating the importance of social proof in influencing the user's decision.</li>
      </ul>
      <h3>Output Node</h3>
      <ul>
        <li><strong>O:</strong>This gives the probability that the user will enjoy the movie, with 0 being they will definitely not like it and 1 being they will definitely love it.</li>
      </ul>
      
      <h2>Situation</h2>
      
      <p>Imagine Jane, who's looking for a movie to watch over the weekend. The recommendation system picks up a newly released Sci-Fi movie (since Sci-Fi is Jane's favorite genre, giving I1 a value of 1). Also, three of Jane's friends have already watched and liked this movie, giving I2 a value of 3.</p>
      <p>The system then processes this information. The first hidden node (H1) considers both her love for Sci-Fi and the fact that several friends liked it. Maybe it computes a weighted average, emphasizing the genre more.</p>
      <p>The second hidden node (H2) may be designed to weigh the number of friends who liked the movie more heavily, acting as a sort of "social proof" factor.</p>

      <p>These hidden layer computations are then passed onto the output node, which takes into account the values from both H1 and H2 to produce a final probability. If the output is close to 1, the system strongly recommends the movie to Jane, confident that she'll enjoy it.</p>

      <p>We ask Jane and she said that given the that it is a Sci-Fi movie and 3 of her friends have already wathced and liked the movie, she says she has a 77% chance that she will enjoy the movie.</p>

      <p>Given that I1 = 1 and I2 = 3, tune the weights of the network so that the movie reccomendation system outputs a probability of 77%! 
      </p>
      <svg ref={svgRef} width="1000" height="600" style={{ margin: 'auto', display: 'block' }}></svg>
      <div className='node-info' style={{ textAlign: 'center', marginTop: '20px' }}></div>  
      <div ref={slidersRef}></div>  
      <div className='centered-div'>
        <br></br>
        <br></br>
        <Link to="/">
            <button style={{fontSize: '24px'}}>Home</button>
        </Link>
      </div>
    </div>
    
  );
}

export default NNSimulator;