import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function NewPage() {
  const svgRef = useRef(null);
  const slidersRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    function calculateOutput(svg, nodes) {
      // Grab the weights from the sliders
      const I1_H1_weight = parseFloat(d3.select('.I1-H1-slider input[type="range"]').property('value'));
      const I1_H2_weight = parseFloat(d3.select('.I1-H2-slider input[type="range"]').property('value'));
      const I2_H1_weight = parseFloat(d3.select('.I2-H1-slider input[type="range"]').property('value'));
      const I2_H2_weight = parseFloat(d3.select('.I2-H2-slider input[type="range"]').property('value'));
      const H1_O_weight = parseFloat(d3.select('.H1-O-slider input[type="range"]').property('value'));
      const H2_O_weight = parseFloat(d3.select('.H2-O-slider input[type="range"]').property('value'));
      
      // Given the inputs
      const I1_value = 3;
      const I2_value = 1;
      svg.append('text')
        .attr('x', nodes.find((n) => n.id === 'I1').layer * (0.8 * width / 4))
        .attr('y', nodes.find((n) => n.id === 'I1').pos * (height / 3))
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .text(`I1: ${I1_value}`)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .style('fill', 'orange');
      svg.append('text')
        .attr('x', nodes.find((n) => n.id === 'I2').layer * (0.8 * width / 4))
        .attr('y', nodes.find((n) => n.id === 'I2').pos * (height / 3))
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .text(`I2: ${I2_value}`)
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
        .attr('y', nodes.find((n) => n.id === 'O').pos * (svgRef.current.clientHeight / 3) + 40)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .text(`Output: ${O_value.toFixed(2)}`)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .style('fill', 'orange');
    }

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
      .style('stroke', '#646cff')
      .style('stroke-width', 5.25);
      
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
          .attr('class', 'input-container')
          .style('display', 'flex')
          .style('align-items', 'center');
        inputContainer.append('input')
          .attr('type', 'text')
          .attr('value', `${source}-${target}`)
          .attr('readonly', true)
          .style('width', '50px')
          .style('text-align', 'center');
        const slider = inputContainer.append('input')
          .attr('type', 'range')
          .attr('min', -1)
          .attr('max', 1)
          .attr('value', 0)
          .attr('step', 0.1)
          .style('accent-color', '#646cff')
          .attr('x', (d) => nodes.find((n) => n.id === d.source).pos * (width / 4))
          .attr('y', (d) => nodes.find((n) => n.id === d.target).pos * (height / 3))
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
          .style('margin-left', '10px');
      });

    }, []);

  return (
    <div className='centered-div'>
      <h1>Introduction to Neural Networks</h1>
      <p>A neural network is a computer system that's inspired by the way our brains work. Just like our brains 
        have tiny cells called neurons that communicate with each other to process information, a neural network 
        uses artificial neurons to process data. Each artificial neuron, like the one you see in the image, takes 
        in information, processes it, and then passes it on to the next neuron. These neurons work together in layers, 
        and they can learn and adapt over time, making neural networks really good at tasks like recognizing patterns 
        in images, understanding spoken language, or making decisions based on data. So, think of a neural network as a 
        digital brain that helps computers make sense of the world around them.</p>
      <h2>Neural Network Simulator</h2>
      <svg ref={svgRef} width="600" height="400" style={{ margin: 'auto', display: 'block' }}></svg>
      <div ref={slidersRef}></div>
    </div>
  );
}

export default NewPage;
