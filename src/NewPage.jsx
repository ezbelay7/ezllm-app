// import React from 'react';

// function NewPage() {
//     return (
//         <div className="centered-div">
//             <h1>Introduction to Neural Networks</h1>
//             <p>A neural network is a computer system that's inspired by the way our brains work. Just like our brains have tiny cells called neurons that communicate with each other to process information, a neural network uses artificial neurons to process data. Each artificial neuron, like the one you see in the image, takes in information, processes it, and then passes it on to the next neuron. These neurons work together in layers, and they can learn and adapt over time, making neural networks really good at tasks like recognizing patterns in images, understanding spoken language, or making decisions based on data. So, think of a neural network as a digital brain that helps computers make sense of the world around them.</p>
//         </div>
//     );
// }

// export default NewPage;
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function NewPage() {
  const svgRef = useRef(null);
  const slidersRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

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
      .style('stroke', '#7a34fc');
      
    // Draw nodes
    svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.layer * (width / 4))
      .attr('cy', (d) => d.pos * (height / 3))
      .attr('r', 20)
      .style('fill', 'lightblue');

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
      .style('font-size', '20px')
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
          .attr('class', 'input-container');
        inputContainer.append('input')
          .attr('type', 'text')
          .attr('value', `${source}-${target}`)
          .attr('readonly', true)
          .style('width', '50px')
          .style('text-align', 'center');
        inputContainer.append('input')
          .attr('type', 'range')
          .attr('min', 0)
          .attr('max', 10)
          .attr('value', 5)
          .attr('step', 0.1)
          .attr('x', (d) => nodes.find((n) => n.id === d.source).pos * (width / 4))
          .attr('y', (d) => nodes.find((n) => n.id === d.target).pos * (height / 3))
          .attr('transform', 'translate(10, 10)')
          .on('input', function () {
            const strokeWidth = this.value === '0' ? 0.25 : this.value;
            svg.select(`#${source}-${target}-line`)
              .style('stroke-width', strokeWidth);
          });
      });


  }, []);

  return (
    <div className='centered-div'>
      <h1>Introduction to Neural Networks</h1>
      <p>A neural network is a computer system that's inspired by the way our brains work. Just like our brains have tiny cells called neurons that communicate with each other to process information, a neural network uses artificial neurons to process data. Each artificial neuron, like the one you see in the image, takes in information, processes it, and then passes it on to the next neuron. These neurons work together in layers, and they can learn and adapt over time, making neural networks really good at tasks like recognizing patterns in images, understanding spoken language, or making decisions based on data. So, think of a neural network as a digital brain that helps computers make sense of the world around them.</p>
      <h2>Neural Network Simulator</h2>
      <svg ref={svgRef} width="800" height="600" style={{ margin: 'auto', display: 'block' }}></svg>
      <div ref={slidersRef}></div>
    </div>
  );
}

export default NewPage;
