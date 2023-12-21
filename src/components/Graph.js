import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

const graphData = {
  nodes: [
    // visual network
    { id: 'node1', name: 'Retina', group: 1 },
    { id: 'node2', name: 'Optic Nerve', group: 1 },
    { id: 'node3', name: 'Lateral Geniculate Nucleus', group: 1 },
    { id: 'node4', name: 'V1', group: 1 },
    { id: 'node5', name: 'V2', group: 1 },
    { id: 'node6', name: 'V4', group: 1 },
    { id: 'node7', name: 'Middle Temporal Area', group: 1 },
    { id: 'node8', name: 'Inferotemporal Cortex', group: 1 },
    { id: 'node9', name: 'Medial Superior Temporal Area', group: 1 },
    { id: 'node10', name: 'Perirhinal Cortex', group: 1 },
    { id: 'node11', name: 'Fusiform Face Area', group: 1 },
    { id: 'node12', name: 'Posterior Parietal Cortex', group: 1 },
    { id: 'node13', name: 'Posterior Parietal Lobule', group: 1 },
    { id: 'node133', name: 'Angular Gyrus', group: 1 },
    // Auditory network
    { id: 'node14', name: 'Cochlea', group: 2 },
    { id: 'node15', name: 'Auditory Nerve', group: 2 },
    { id: 'node155', name: 'Inferior Colluculus', group: 2 },
    { id: 'node16', name: 'Primary Auditory Cortex', group: 2 },
    { id: 'node17', name: 'Secondary Audio Cortex', group: 2 },
    { id: 'node18', name: 'Auditory Association Area', group: 2 },
    { id: 'node19', name: 'Wernicke Area', group: 2 },
    { id: 'node20', name: 'Superior Colliculus', group: 2 },
    // Motor network
    { id: 'nodeM1', name: 'Primary Motor Cortex (M1)', group: 3 },
    { id: 'nodePMC', name: 'Premotor Cortex', group: 3 },
    { id: 'nodeSMA', name: 'Supplementary Motor Area (SMA)', group: 3 },
    { id: 'nodeBG', name: 'Basal Ganglia', group: 3 },
    { id: 'nodeCB', name: 'Cerebellum', group: 3 },
    { id: 'nodeMAC', name: 'Motor Association Cortex', group: 3 },
    // Central executive network
    { id: 'nodeDorsalDLPFC', name: 'Dorsal DLPFC', group: 4 },
    { id: 'nodeVLPFC', name: 'Ventrolateral PFC (VLPFC)', group: 4 },
    { id: 'nodeACC', name: 'Anterior Cingulate Cortex (ACC)', group: 4 },
    { id: 'nodeIFG', name: 'Inferior Frontal Gyrus (IFG)', group: 4 },
    { id: 'nodeOFC', name: 'Orbitofrontal Cortex (OFC)', group: 4 },
    { id: 'nodeMCC', name: 'Midcingulate Cortex (MCC)', group: 4 },
    { id: 'nodeDMPFC', name: 'Dorsomedial Prefrontal Cortex (DMPFC)', group: 4 },
    { id: 'nodeLPFC', name: 'Lateral Prefrontal Cortex (LPFC)', group: 4 },
    { id: 'nodePCC', name: 'Posterior Cingulate Cortex (PCC)', group: 4 },
    { id: 'nodeTPJ', name: 'Temporoparietal Junction (TPJ)', group: 4 },
    { id: 'nodeMFC', name: 'Medial Frontal Cortex (MFC)', group: 4 },
    // Salience network
    { id: 'nodeAI', name: 'Anterior Insula (AI)', group: 5 },
    { id: 'nodeSMG', name: 'Supramarginal Gyrus (SMG)', group: 5 },
    // Default mode network
    { id: 'nodeMFC_DMN', name: 'Medial Prefrontal Cortex (MFC)', group: 6 },
    { id: 'nodePCC_DMN', name: 'Posterior Cingulate Cortex (PCC)', group: 6 },
    { id: 'nodeIPL', name: 'Inferior Parietal Lobule (IPL)', group: 6 },
    { id: 'nodeLTC', name: 'Lateral Temporal Cortex (LTC)', group: 6 },
    { id: 'nodeHF', name: 'Hippocampal Formation (HF)', group: 6 },

  ],

  links: [
    // visual network
    { source: 'node1', target: 'node2', color: 'pink' },
    { source: 'node2', target: 'node3', color: 'pink' },
    { source: 'node3', target: 'node4', color: 'pink' },
    { source: 'node4', target: 'node5', color: 'pink' },
    { source: 'node5', target: 'node6', color: 'pink' },
    { source: 'node5', target: 'node7', color: 'pink' },
    { source: 'node6', target: 'node8', color: 'pink' },
    { source: 'node7', target: 'node9', color: 'pink' },
    { source: 'node8', target: 'node10', color: 'pink' },
    { source: 'node10', target: 'node11', color: 'pink' },
    { source: 'node10', target: 'node12', color: 'pink' },
    { source: 'node12', target: 'node13', color: 'pink' },
    { source: 'node8', target: 'node13', color: 'pink' },
    { source: 'node6', target: 'node7', color: 'pink' },
    { source: 'node1', target: 'node20', color: 'pink' },
    { source: 'node4', target: 'node20', color: 'pink' },
    { source: 'node5', target: 'node20', color: 'pink' },
    { source: 'node8', target: 'node133', color: 'pink' },
    { source: 'node19', target: 'node133', color: 'pink' },
    { source: 'node1', target: 'nodeM1', color: 'pink' },
    { source: 'node4', target: 'nodeM1', color: 'pink' },
    // auditory network
    { source: 'node14', target: 'node15', color: 'pink' },
    { source: 'node15', target: 'node16', color: 'pink' },
    { source: 'node16', target: 'node17', color: 'pink' },
    { source: 'node155', target: 'node16', color: 'pink' },
    { source: 'node17', target: 'node18', color: 'pink' },
    { source: 'node18', target: 'node19', color: 'pink' },
    { source: 'node4', target: 'node20', color: 'pink' },
    { source: 'node155', target: 'node20', color: 'pink' },
    // Motor network
    { source: 'nodePMC', target: 'nodeM1', color: 'pink' },
    { source: 'nodeSMA', target: 'nodeM1', color: 'pink' },
    { source: 'nodeM1', target: 'nodeBG', color: 'pink' },
    { source: 'nodeM1', target: 'nodeCB', color: 'pink' }, 
    { source: 'nodeMAC', target: 'nodeM1', color: 'pink' }, 
    { source: 'nodeM1', target: 'node19', color: 'pink' },
    { source: 'nodeM1', target: 'node16', color: 'pink' },
    // Central executive network
    { source: 'nodeDorsalDLPFC', target: 'nodeVLPFC', color: 'pink' },
    { source: 'nodeDorsalDLPFC', target: 'nodeACC', color: 'pink' },
    { source: 'nodeDorsalDLPFC', target: 'nodeIFG', color: 'pink' },
    { source: 'nodeDorsalDLPFC', target: 'nodeOFC', color: 'pink' },
    { source: 'nodeDorsalDLPFC', target: 'nodeMCC', color: 'pink' },
    { source: 'nodeDorsalDLPFC', target: 'nodeDMPFC', color: 'pink' },
    { source: 'nodeDorsalDLPFC', target: 'nodeLPFC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeIFG', color: 'pink' },
    { source: 'nodeACC', target: 'nodeOFC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeMCC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeDMPFC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeLPFC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeTPJ', color: 'pink' },
    { source: 'nodeIFG', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeOFC', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeMCC', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeDMPFC', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeLPFC', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeTPJ', target: 'nodeMFC', color: 'pink' },
    { source: 'nodePCC', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeMFC_DMN', target: 'nodeDorsalDLPFC', color: 'pink' },
    // CEN-Visual connection
    { source: 'nodeDorsalDLPFC', target: 'node12', color: 'pink' },
    // CEN-Auditory connections
    { source: 'nodeVLPFC', target: 'node16', color: 'pink' },
    { source: 'nodeVLPFC', target: 'node19', color: 'pink' },
    // CEN-Motor connection
    { source: 'nodePMC', target: 'nodeDorsalDLPFC', color: 'pink' },
    // CEN-DMN connections
    { source: 'nodeMFC_DMN', target: 'nodeIPL', color: 'pink' },
    { source: 'nodeMFC_DMN', target: 'nodeLTC', color: 'pink' },
    { source: 'nodeMFC_DMN', target: 'nodeHF', color: 'pink' },
    // CEN-SN connection
    { source: 'nodeMFC_DMN', target: 'nodeAI', color: 'pink' },
    // Salience network
    { source: 'nodeAI', target: 'nodeACC', color: 'pink' },
    { source: 'nodeAI', target: 'nodeSMG', color: 'pink' },
    { source: 'nodeACC', target: 'nodeDorsalDLPFC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeMFC', color: 'pink' },
    { source: 'nodeSMG', target: 'nodeTPJ', color: 'pink' },
    { source: 'nodeSMG', target: 'node19', color: 'pink' },
    // SN-Visual connections
    { source: 'nodeAI', target: 'node8', color: 'pink' },
    { source: 'nodeAI', target: 'node11', color: 'pink' },
    // SN-Auditory connection
    { source: 'nodeAI', target: 'node16', color: 'pink' },
    // SN-Motor connection
    { source: 'nodeAI', target: 'nodeM1', color: 'pink' },
    // SN-CEN connections
    { source: 'nodeAI', target: 'nodeDorsalDLPFC', color: 'pink' },
    { source: 'nodeACC', target: 'nodeDorsalDLPFC', color: 'pink' },
    // Default mode network
    { source: 'nodeMFC_DMN', target: 'nodePCC', color: 'pink' },
    { source: 'nodeMFC', target: 'nodeIPL', color: 'pink' },
    { source: 'nodePCC_DMN', target: 'nodeLTC', color: 'pink' },
    { source: 'nodePCC_DMN', target: 'nodeHF', color: 'pink' },
    { source: 'nodeIPL', target: 'nodeLTC', color: 'pink' },
    { source: 'nodeIPL', target: 'nodeHF', color: 'pink' },
    { source: 'nodeLTC', target: 'nodeHF', color: 'pink' },
    // DMN-Visual connection
    { source: 'nodePCC_DMN', target: 'node9', color: 'pink' },
    // DMN-SN Connection
    { source: 'nodeMFC', target: 'nodeAI', color: 'pink' },
    // DMN-Auditory connection
    { source: 'nodeMFC', target: 'node19', color: 'pink' },
    // DMN-CEN connection
    { source: 'nodeMFC', target: 'nodeDorsalDLPFC', color: 'pink' },
  ]
};

const Graph = () => {
  const getNodeColor = (node) => {
    switch (node.group) {
      case 1:
        return 'lime';
      case 2:
        return 'cyan';
      case 3:
        return 'white'; 
      case 4:
        return 'orange';
      case 5:
        return 'yellow'
      case 6:
        return 'violet'
      default:
        return 'gray'; 
    }
  };

  return (
    <ForceGraph2D
    graphData={graphData}
    nodeLabel="name"
    nodeColor={getNodeColor}
    linkDirectionalArrowLength={0}
    linkCurvature={0.25}
    />
  );
};

export default Graph;