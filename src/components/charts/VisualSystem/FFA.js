import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import '../CustomNode.css'

const initialNodes = [
    {
        id: 'mst',
        position: { x: 50, y: -500 },
        data: { label: 'MST (Medial Superior Temporal area): Analyzing more complex aspects of motion, including the motion of objects relative to the background.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'ppc', 
        position: { x: 50, y: 100 },
        data: { label: 'Posterior Parietal Cortex: Involved in spatial awareness and sensory integration.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'spl',
        position: { x: 50, y: 500 },
        data: { label: 'Superior Parietal Lobule (SPL): Involved in spatial relations and coordination.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'precuneus',
        position: { x: 50, y: 700 },
        data: { label: 'Precuneus: Plays a role in episodic memory, visuospatial processing, and self-reflection.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'v4',
        position: { x: 250, y: -100 },
        data: { label: 'V4: Processes color and shape, helps in object recognition.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'ffa',
        position: { x: 250, y: 500 },
        data: { label: 'FFA (Fusiform Face Area): Specialized for facial recognition.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'perirhinal',
        position: { x: 250, y: -1200 },
        data: { label: 'Perirhinal Cortex: Involved in object recognition and memory.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'ppa',
        position: { x: 250, y: 700 },
        data: { label: 'PPA (Parahippocampal Place Area): Involved in recognizing places and scenes.' },
        draggable: false,
        className: 'darkNodeStyle'
      }
];

const initialEdges = [
    { id: 'e8-102', source: 'it', target: 'spl', animated: true, label: 'Object localization / identification' },
    { id: 'e8-11', source: 'mst', target: 'ppc', animated: true },
    { id: 'e12-1301', source: 'ppc', target: 'fef', animated: true },
    { id: 'e13-14', source: 'fef', target: 'spl', animated: true },
    { id: 'e14-14', source: 'ppc', target: 'spl', animated: true },
    { id: 'e13-15', source: 'it', target: 'ffa', animated: true },
    { id: 'e9-10', source: 'v4', target: 'it', animated: true },
    { id: 'e14-15', source: 'spl', target: 'precuneus', animated: true },
    { id: 'e12-1302', source: 'ffa', target: 'ppa', animated: true },
    { id: 'e12-1303', source: 'perirhinal', target: 'ffa', animated: true }
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const FFA = () => {
  return (
    <div 
    style={{ height: '600px', width: '350px', pointerEvents: 'none' }}
    >   
        <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges}
        defaultViewport={defaultViewport}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
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

export default FFA;