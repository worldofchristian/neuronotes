import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'start',
        position: { x: 100, y: 200 },
        data: { label: 'Determine Data Type' },
        draggable: false
    },
    {
        id: 'nominal',
        position: { x: 400, y: 300 },
        data: { label: 'Nominal: Categories without intrinsic order' },
        draggable: false
    },
    {
        id: 'ordinal',
        position: { x: 300, y: 400 },
        data: { label: 'Ordinal: Categories with a rank order' },
        draggable: false
    },
    {
        id: '5-or-more',
        position: { x: 500, y: 550 },
        data: { label: 'Does each cell in the contingency table have an expected frequency of 5 or more?' },
        draggable: false
    },
    {
        id: '5-or-more-yes',
        position: { x: 800, y: 750 },
        data: { label: 'Yes' },
        draggable: false
    },
    {
        id: 'chi-squared',
        position: { x: 800, y: 850 },
        data: { label: 'Chi-Squared Test: Useful for categorical variables, it doesn\'t assume a normal distribution of the data (non-parametric), making it less susceptible to outliers' },
        draggable: false
    },
    {
        id: '5-or-more-no',
        position: { x: 600, y: 750 },
        data: { label: 'No' },
        draggable: false
    },
    {
        id: 'fishers-exact',
        position: { x: 600, y: 850 },
        data: { label: 'Fisher\'s Exact Test: Does not rely on approximatation, more suitable for smaller samples' },
        draggable: false
    },
    {
        id: 'interval',
        position: { x: 200, y: 500 },
        data: { label: 'Interval: Numeric scales with no true zero' },
        draggable: false
    },
    {
        id: 'ratio',
        position: { x: 100, y: 600 },
        data: { label: 'Ratio: Numeric scales with a true zero' },
        draggable: false
    },
    {
        id: 'anova',
        position: { x: 150, y: 800 },
        data: { label: 'ANOVA: Useful for continuous data, comparing means involving more than two groups' },
        draggable: false
    },
    {
        id: 't-tests',
        position: { x: 350, y: 800 },
        data: { label: 'T-tests: Useful for continuous data, comparing means involving only two groups' },
        draggable: false
    }
];

const initialEdges = [
    { id: 'e1-2', source: 'start', target: 'nominal', animated: true },
    { id: 'e1-3', source: 'start', target: 'ordinal', animated: true },
    { id: 'e2-6', source: 'nominal', target: '5-or-more', animated: true },
    { id: 'e3-6', source: 'ordinal', target: '5-or-more', animated: true },
    { id: 'e4-6', source: '5-or-more', target: '5-or-more-yes', animated: true },
    { id: 'e5-6', source: '5-or-more', target: '5-or-more-no', animated: true },
    { id: 'e6-6', source: '5-or-more-yes', target: 'chi-squared', animated: true },
    { id: 'e7-6', source: '5-or-more-no', target: 'fishers-exact', animated: true },
    { id: 'e1-4', source: 'start', target: 'interval', animated: true },
    { id: 'e1-5', source: 'start', target: 'ratio', animated: true },
    { id: 'e4-8', source: 'interval', target: 'anova', animated: true },
    { id: 'e4-9', source: 'interval', target: 't-tests', animated: true },
    { id: 'e5-8', source: 'ratio', target: 'anova', animated: true },
    { id: 'e5-9', source: 'ratio', target: 't-tests', animated: true }
];


const defaultViewport = { x: -50, y: -50, zoom: 1 };

const StatisticalTestsChart = () => {
    return (
      <div 
      style={{ width: '100vw', height: '100vh' }}
      >   
          <ReactFlow 
          nodes={initialNodes} 
          edges={initialEdges}
          defaultViewport={defaultViewport}
          elementsSelectable={false}
          >
          <Background 
          variant="dots" 
          gap={12} 
          size={0.6} 
          />
          </ReactFlow>
      </div>
    );
  };
  
  export default StatisticalTestsChart;