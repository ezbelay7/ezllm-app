import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import '../../styles/lamp.css';

function LampAnalogy() {
  useEffect(() => {
    drawDiagram();
  }, []);

  const drawDiagram = () => {
    const width = 900;
    const height = 400;
    const svg = d3.select('#neural-network-diagram').attr('width', width).attr('height', height);

    // Utility function to adjust line endpoints to the edge of the circles
    const adjustLine = (source, target) => {
      const dx = target.cx - source.cx;
      const dy = target.cy - source.cy;
      const angle = Math.atan2(dy, dx);
      const radius = 35; 

      return {
        x1: source.cx + Math.cos(angle) * radius,
        y1: source.cy + Math.sin(angle) * radius,
        x2: target.cx - Math.cos(angle) * radius,
        y2: target.cy - Math.sin(angle) * radius,
      };
    };

      // Select the tooltip element from the DOM
    const tooltip = d3.select('#tooltip');

    // Function to show the tooltip
    const showTooltip = (event, d) => {
      // Get the bounding rectangle of the SVG container
      const svgRect = document.getElementById('neural-network-diagram').getBoundingClientRect();
    
      // Calculate the position based on the SVG container and the node's coordinates
      const x = svgRect.left + d.cx;
      const y = svgRect.top + d.cy;
    
      // Position the tooltip
      tooltip
        .style('opacity', 1)
        .html(getTooltipContent(d)) 
        .style('left', (x + 15) + 'px') // Adjust the 15 if needed to position the tooltip closer/further
        .style('top', (y - 10) + 'px'); // Adjust the 10 if needed to position the tooltip higher/lower
    };
    

    // Function to hide the tooltip
    const hideTooltip = () => {
      tooltip.style('opacity', 0);
    };

    const getTooltipContent = (node) => {
      switch (node.id) {
        case 'x1':
        case 'x2':
        case 'x3':
          return 'This is an input node. It represents one of the inputs to the neural network.';
        case 'w1':
        case 'w2':
        case 'w3':
          return 'This is a weight node. It holds the weight value for the corresponding input.';
        case 'sum':
          return 'This is the summation node. It aggregates the weighted inputs.';
        case 'activation':
          return 'This is the activation node. It applies an activation function to the sum.';
        case 'output':
          return 'This is the output node. It represents the output of the neural network.';
        default:
          return 'Unknown node';
      }
    };
    

    const nodes = [
      { id: 'x1', group: 'input', cx: 150, cy: 100 },
      { id: 'x2', group: 'input', cx: 150, cy: 200 },
      { id: 'x3', group: 'input', cx: 150, cy: 300 },
      { id: 'w1', group: 'weight', cx: 350, cy: 100 },
      { id: 'w2', group: 'weight', cx: 350, cy: 200 },
      { id: 'w3', group: 'weight', cx: 350, cy: 300 },
      { id: 'sum', group: 'sum', cx: 550, cy: 200 },
      { id: 'activation', group: 'activation', cx: 650, cy: 200 },
      { id: 'output', group: 'output', cx: 750, cy: 200 }
    ];

    svg.append('text')
      .text('Input')
      .attr('x', 150)
      .attr('y', 50)
      .attr('text-anchor', 'middle')
      .style('fill', 'green')
      .style('font-family', 'Arial, sans-serif')
      .style('font-size', '24px')
      .style('font-weight', 'bold');

    svg.append('text')
      .text('Weights')
      .attr('x', 350)
      .attr('y', 50)
      .attr('text-anchor', 'middle')
      .style('fill', 'blue')
      .style('font-family', 'Arial, sans-serif')
      .style('font-size', '24px')
      .style('font-weight', 'bold');


    // add text above sum activation output that says "hover over for information!"
    svg.append('text')
      .text('Hover over nodes for info!')
      .attr('x', 650)
      .attr('y', 100)
      .attr('text-anchor', 'middle')
      .style('fill', 'black')
      .style('font-family', 'Arial, sans-serif')
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .style('font-style', 'italic');
      ;
      
    const links = [
      { source: 'x1', target: 'w1' },
      { source: 'x2', target: 'w2' },
      { source: 'x3', target: 'w3' },
      { source: 'w1', target: 'sum' },
      { source: 'w2', target: 'sum' },
      { source: 'w3', target: 'sum' },
      { source: 'sum', target: 'activation' },
      { source: 'activation', target: 'output' }
    ];

    const nodeData = svg.selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .on('mouseover', showTooltip) // Show tooltip on mouseover
      .on('mouseout', hideTooltip); // Hide tooltip on mouseout

    nodeData.append('circle')
      .attr('class', 'node')
      .attr('r', 35)
      .attr('cx', d => d.cx)
      .attr('cy', d => d.cy)
      .style('fill', d => {
        switch (d.group) {
          case 'input': return 'green';
          case 'weight': return 'blue';
          case 'sum': return 'red';
          case 'activation': return 'orange';
          case 'output': return 'purple'; // Added color for output node
          default: return 'gray';
        }
      });

    nodeData.append('text')
      .text(d => d.id)
      .attr('x', d => d.cx)
      .attr('y', d => d.cy + 5)
      .attr('text-anchor', 'middle')
      .style('fill', 'white')
      .on('mouseover', showTooltip) // Show tooltip on mouseover
      .on('mouseout', hideTooltip); // Hide tooltip on mouseout

    const linkData = svg.selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('x1', d => adjustLine(nodes.find(n => n.id === d.source), nodes.find(n => n.id === d.target)).x1)
      .attr('y1', d => adjustLine(nodes.find(n => n.id === d.source), nodes.find(n => n.id === d.target)).y1)
      .attr('x2', d => adjustLine(nodes.find(n => n.id === d.source), nodes.find(n => n.id === d.target)).x2)
      .attr('y2', d => adjustLine(nodes.find(n => n.id === d.source), nodes.find(n => n.id === d.target)).y2)
      .style('stroke', '#999')
      .style('stroke-opacity', 1);

    
  };

  return (
    <div className='page-div'>
      <h1>Single Layer Perceptron Analogy: Lamp</h1>
      <br />
      <h2 style={{textAlign: 'left'}}>Analogy for Artificial Neural Networks</h2>
      <p>Imagine a cozy room where the ambiance is set by a single lamp. This lamp's brightness isn't 
        just controlled by an on-off switch; instead, it depends on various sources of electricity it 
        can tap into: solar panels catching the day's sunlight, batteries charged and ready for use, 
        and a direct power line. The lamp intelligently decides how much electricity to draw from each 
        source and whether it should light up at all. This room, with its unique lamp, serves as our 
        analogy for understanding the intricate components and functioning of a neural network. Let's 
        explore this analogy further.</p>

      {/* Neural Network Diagram */}
      <svg id="neural-network-diagram"></svg>
      <br></br>
      <div className='tooltip' id='tooltip' style={{ position: 'absolute', opacity: 0 }}></div>
      <Link to="/multilayerperceptron">
        <button>Let's move on to Multilayer Perceptrons!</button>
      </Link>
    </div>
  );
}


export default LampAnalogy;
