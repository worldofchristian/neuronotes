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
    data: { label: 'LGN: Acts as a relay station, sending signals to V1.' },
  },
  {
    id: 'v1',
    position: { x: 200, y: 500 },
    data: { label: 'V1: Responsible for edge detection, basic shapes, and some color processing.' },
  },
  {
    id: 'v2',
    position: { x: 200, y: 700 },
    data: { label: 'V2: Constructs more complex forms like intricate shapes and object recognition.' },
  },
  {
    id: 'dorsal',
    position: { x: 500, y: 1000 },
    data: { label: 'Dorsal Stream: Concerned with spatial location and motion.' },
  },
  {
    id: 'mt',
    position: { x: 500, y: 1150 },
    data: { label: 'MT (Middle Temporal area): Processing motion, perceiving the speed and direction of moving objects.' },
  },
  {
    id: 'mst',
    position: { x: 500, y: 1300 },
    data: { label: 'MST (Medial Superior Temporal area): Analyzing more complex aspects of motion, including the motion of objects relative to the background.' },
  },
  {
    id: 'ventral',
    position: { x: 150, y: 1000 },
    data: { label: 'Ventral Stream: Responsible for object recognition and identification.' },
  },
  {
    id: 'v4',
    position: { x: 150, y: 1300 },
    data: { label: 'V4: Processes color and shape, helps in object recognition.' },
  },
  {
    id: 'it',
    position: { x: 250, y: 1600 },
    data: { label: 'IT (Inferotemporal Cortex): Involved in recognition and identification of objects.' },
  },
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
  { id: 'e8-10', source: 'mst', target: 'it', animated: true, label: 'Cross-stream integration' },
];

const VisualSystem = () => {
  return (
    <div 
    style={{ width: '100vw', height: '100vh' }}
    >   
        <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges}
        defaultposition={{ x: -75, y: -100 }}
        >
        <Background 
        variant="dots" 
        gap={12} 
        size={0.25} 
        />
        </ReactFlow>
    </div>
  );
};

export default VisualSystem;