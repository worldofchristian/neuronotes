import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import '../CustomNode.css'

const initialNodes = [
  {
    id: 'retina',
    position: { x: 50, y: 100 },
    data: { label: 'Retina: Captures light and converts it into electrical signals.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'lgn',
    position: { x: 175, y: 275 },
    data: { label: 'LGN (Lateral Geniculate Nucleus): Acts as a relay station, sending signals to V1.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'v1',
    position: { x: 175, y: 450 },
    data: { label: 'V1: Responsible for edge detection, basic shapes, and some color processing.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'v2',
    position: { x: 175, y: 615 },
    data: { label: 'V2: Constructs more complex forms like intricate shapes and object recognition.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
];

const initialEdges = [
  { id: 'e1-2', source: 'retina', target: 'lgn', animated: true },
  { id: 'e2-3', source: 'lgn', target: 'v1', animated: true },
  { id: 'e3-4', source: 'v1', target: 'v2', animated: true },
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const RetinatoV2 = () => {
  return (
    <div 
    style={{ height: '700px', width: '350px', pointerEvents: 'none' }}
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

export default RetinatoV2;