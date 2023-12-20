import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import '../CustomNode.css'

const initialNodes = [
    {
        id: 'v2',
        position: { x: 150, y: 60 },
        data: { label: 'V2: Constructs more complex forms like intricate shapes and object recognition.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
    {
        id: 'dorsal',
        position: { x: 50, y: 300 },
        data: { label: 'Dorsal Stream: Concerned with spatial location and motion.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'mt',
        position: { x: 50, y: 770 },
        data: { label: 'MT (Middle Temporal area): Processing motion, perceiving the speed and direction of moving objects.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'mst',
        position: { x: 50, y: 1000 },
        data: { label: 'MST (Medial Superior Temporal area): Analyzing more complex aspects of motion, including the motion of objects relative to the background.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'ppc', 
        position: { x: 50, y: 1700 },
        data: { label: 'Posterior Parietal Cortex: Involved in spatial awareness and sensory integration.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'ventral',
        position: { x: 250, y: 300 },
        data: { label: 'Ventral Stream: Responsible for object recognition and identification.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'v4',
        position: { x: 250, y: 450 },
        data: { label: 'V4: Processes color and shape, helps in object recognition.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'it',
        position: { x: 250, y: 770 },
        data: { label: 'IT (Inferotemporal Cortex): Involved in recognition and identification of objects.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
      {
        id: 'perirhinal',
        position: { x: 250, y: 1200 },
        data: { label: 'Perirhinal Cortex: Involved in object recognition and memory.' },
        draggable: false,
        className: 'darkNodeStyle'
      },
];

const initialEdges = [
    { id: 'e4-5', source: 'v2', target: 'dorsal', animated: true },
    { id: 'e4-6', source: 'v2', target: 'ventral', animated: true },
    { id: 'e5-7', source: 'dorsal', target: 'mt', animated: true },
    { id: 'e7-8', source: 'mt', target: 'mst', animated: true },
    { id: 'e6-9', source: 'ventral', target: 'v4', animated: true },
    { id: 'e9-10', source: 'v4', target: 'it', animated: true },
    { id: 'e8-101', source: 'v4', target: 'mt', animated: true, label: 'Color-motion integration', labelStyle: { background: 'none' } },
    { id: 'e8-102', source: 'it', target: 'spl', animated: true, label: 'Object localization / identification' },
    { id: 'e8-11', source: 'mst', target: 'ppc', animated: true },
    { id: 'e12-1301', source: 'ppc', target: 'fef', animated: true },
    { id: 'e13-14', source: 'fef', target: 'spl', animated: true },
    { id: 'e14-15', source: 'spl', target: 'precuneus', animated: true },
    { id: 'e10-1201', source: 'it', target: 'perirhinal', animated: true },
    { id: 'e10-1202', source: 'perirhinal', target: 'ffa', animated: true },
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const DorsalVentral = () => {
  return (
    <div 
    style={{ height: '1400px', width: '350px', pointerEvents: 'none' }}
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

export default DorsalVentral;