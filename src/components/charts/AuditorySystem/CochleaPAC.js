import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import '../CustomNode.css';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'cochlea',
    position: { x: 150, y: 100 },
    data: { label: 'Cochlea: Converts sound vibrations into electrical signals.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
  {
    id: 'an',
    position: { x: 150, y: 300 },
    data: { label: 'Auditory Nerve: Transmits electrical signals to the brain.' },
    draggable: false,
    className: 'darkNodeStyle'  
  },
  {
    id: 'ac',
    position: { x: 150, y: 450 },
    data: { label: 'Primary Auditory Cortex: Initial processing of auditory information, analyzing basic features such as pitch and volume.' },
    draggable: false,
    className: 'darkNodeStyle'
  },
];

const initialEdges = [
  { id: 'e1-2', source: 'cochlea', target: 'an', animated: true },
  { id: 'e2-3', source: 'an', target: 'ac', animated: true },
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const CochleaPAC = () => {
  return (
    <div style={{ width: '350px', height: '600px' }}>   
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

export default CochleaPAC;