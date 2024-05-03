import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import '../CustomNode.css';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'ac',
    position: { x: 175, y: -200 },
    data: { label: 'Primary Auditory Cortex: Initial processing of auditory information, analyzing basic features such as pitch and volume.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'sac',
    position: { x: 175, y: 200 },
    data: { label: 'Secondary Auditory Cortex: Further processing of auditory information, including complex features such as melody and harmony.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'wa',
    position: { x: 175, y: 800 },
    data: { label: "Wernicke's Area: Involved in understanding speech and language." },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'aaa',
    position: { x: 275, y: 550 },
    data: { label: "Auditory Association Area: Processes complex sounds, recognizes patterns in sound." },
    draggable: false,
    className: 'darkNodeStyle'
  },
];

const initialEdges = [
  { id: 'e2-3', source: 'ac', target: 'sac', animated: true },
  { id: 'e2-5', source: 'sac', target: 'aaa', animated: true, label: "Processes complex sounds" },
  { id: 'e2-7', source: 'sac', target: 'wa', animated: true },
  { id: 'e5-6', source: 'aaa', target: 'wa', animated: true, label: "Links complex sound processing to language understanding" }
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const PACaaa = () => {
  return (
    <div style={{ width: '350px', height: '800px' }}>   
        <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges}
        defaultViewport={defaultViewport}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
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

export default PACaaa;