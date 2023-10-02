import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'retina',
    position: { x: 75, y: 100 },
    data: { label: 'Retina: Captures light and converts it into electrical signals.' },
  },
  {
    id: 'lgn',
    position: { x: 200, y: 300 },
    data: { label: 'LGN (Lateral Geniculate Nucleus): Acts as a relay station, sending signals to V1.' },
  },
  {
    id: 'v1',
    position: { x: 200, y: 450 },
    data: { label: 'V1: Responsible for edge detection, basic shapes, and some color processing.' },
  },
  {
    id: 'v2',
    position: { x: 200, y: 600 },
    data: { label: 'V2: Constructs more complex forms like intricate shapes and object recognition.' },
  },
  {
    id: 'dorsal',
    position: { x: 400, y: 825 },
    data: { label: 'Dorsal Stream: Concerned with spatial location and motion.' },
  },
  {
    id: 'mt',
    position: { x: 400, y: 1100 },
    data: { label: 'MT (Middle Temporal area): Processing motion, perceiving the speed and direction of moving objects.' },
  },
  {
    id: 'mst',
    position: { x: 500, y: 1300 },
    data: { label: 'MST (Medial Superior Temporal area): Analyzing more complex aspects of motion, including the motion of objects relative to the background.' },
  },
  {
    id: 'ppc', 
    position: { x: 500, y: 1550 },
    data: { label: 'Posterior Parietal Cortex: Involved in spatial awareness and sensory integration.' },  
  },
  {
    id: 'fef',
    position: { x: 500, y: 1750 },
    data: { label: 'Frontal Eye Fields (FEF): Controls voluntary eye movements and visual attention.' },
  },
  {
    id: 'spl',
    position: { x: 400, y: 2000 },
    data: { label: 'Superior Parietal Lobule (SPL): Involved in spatial relations and coordination.' },
  },
  {
    id: 'precuneus',
    position: { x: 400, y: 2200 },
    data: { label: 'Precuneus: Plays a role in episodic memory, visuospatial processing, and self-reflection.' },
  },
  {
    id: 'ventral',
    position: { x: 75, y: 825 },
    data: { label: 'Ventral Stream: Responsible for object recognition and identification.' },
  },
  {
    id: 'v4',
    position: { x: 75, y: 950 },
    data: { label: 'V4: Processes color and shape, helps in object recognition.' },
  },
  {
    id: 'it',
    position: { x: 75, y: 1200 },
    data: { label: 'IT (Inferotemporal Cortex): Involved in recognition and identification of objects.' },
  },
  {
    id: 'perirhinal',
    position: { x: -50, y: 1500 },
    data: { label: 'Perirhinal Cortex: Involved in object recognition and memory.' },
  },
  {
    id: 'ffa',
    position: { x: -50, y: 1700 },
    data: { label: 'FFA (Fusiform Face Area): Specialized for facial recognition.' },
  },
  {
    id: 'ppa',
    position: { x: 75, y: 2000 },
    data: { label: 'PPA (Parahippocampal Place Area): Involved in recognizing places and scenes.' },
  }
];

const initialEdges = [
  { id: 'e1-2', source: 'retina', target: 'lgn', animated: true },
  { id: 'e2-3', source: 'lgn', target: 'v1', animated: true },
  { id: 'e3-4', source: 'v1', target: 'v2', animated: true },
  { id: 'e4-5', source: 'v2', target: 'dorsal', animated: true },
  { id: 'e4-6', source: 'v2', target: 'ventral', animated: true },
  { id: 'e5-7', source: 'dorsal', target: 'mt', animated: true },
  { id: 'e7-8', source: 'mt', target: 'mst', animated: true },
  { id: 'e6-9', source: 'ventral', target: 'v4', animated: true },
  { id: 'e9-10', source: 'v4', target: 'it', animated: true },
  { id: 'e8-10', source: 'v4', target: 'mt', animated: true, label: 'Color-motion integration' },
  { id: 'e8-10', source: 'it', target: 'spl', animated: true, label: 'Object localization / identification' },
  { id: 'e8-11', source: 'mst', target: 'ppc', animated: true },
  { id: 'e12-13', source: 'ppc', target: 'fef', animated: true },
  { id: 'e13-14', source: 'fef', target: 'spl', animated: true },
  { id: 'e14-15', source: 'spl', target: 'precuneus', animated: true },
  { id: 'e10-12', source: 'it', target: 'perirhinal', animated: true },
  { id: 'e10-12', source: 'perirhinal', target: 'ffa', animated: true },
  { id: 'e12-13', source: 'ffa', target: 'ppa', animated: true }
];

const defaultViewport = { x: -50, y: -50, zoom: 1.2 };

const VisualSystem = () => {
  return (
    <div 
    style={{ width: '100vw', height: '100vh' }}
    >   
        <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges}
        defaultViewport={defaultViewport}
        >
        <Background 
        variant="dots" 
        gap={12} 
        size={0.5} 
        />
        </ReactFlow>
    </div>
  );
};

export default VisualSystem;