import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'cochlea',
    position: { x: 150, y: 100 },
    data: { label: 'Cochlea: Converts sound vibrations into electrical signals.' },
    draggable: false
  },
  {
    id: 'an',
    position: { x: 275, y: 300 },
    data: { label: 'Auditory Nerve: Transmits electrical signals to the brain.' },
    draggable: false
  },
  {
    id: 'ac',
    position: { x: 275, y: 450 },
    data: { label: 'Primary Auditory Cortex: Initial processing of auditory information, analyzing basic features such as pitch and volume.' },
    draggable: false
  },
  {
    id: 'sac',
    position: { x: 275, y: 650 },
    data: { label: 'Secondary Auditory Cortex: Further processing of auditory information, including complex features such as melody and harmony.' },
    draggable: false
  },
  {
    id: 'dorsal',
    position: { x: 400, y: 1000 },
    data: { label: 'Dorsal Auditory Stream: Processes spatial location and motion of sound sources.' },
    draggable: false
  },
  {
    id: 'ventral',
    position: { x: 150, y: 1000 },
    data: { label: 'Ventral Auditory Stream: Processes characteristics of sound, like identifying voices or understanding speech.' },
    draggable: false
  },
  {
    id: 'wa',
    position: { x: 150, y: 1200 },
    data: { label: "Wernicke's Area: Involved in understanding speech and language." },
    draggable: false
  },
  {
    id: 'aaa',
    position: { x: 275, y: 750 },
    data: { label: "Auditory Association Area: Processes complex sounds, recognizes patterns in sound." },
    draggable: false
  },
];

const initialEdges = [
  { id: 'e1-2', source: 'cochlea', target: 'an', animated: true },
  { id: 'e2-3', source: 'an', target: 'ac', animated: true },
  { id: 'e2-3', source: 'ac', target: 'sac', animated: true },
  { id: 'e2-3', source: 'sac', target: 'dorsal', animated: true },
  { id: 'e2-3', source: 'sac', target: 'ventral', animated: true },
  { id: 'e2-3', source: 'ventral', target: 'wa', animated: true }
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const AuditorySystem = () => {
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

export default AuditorySystem;