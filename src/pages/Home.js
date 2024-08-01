import React, { useState } from 'react';
import { useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import HomeList from '../components/HomeList';

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
    // Visual network
    { source: 'node1', target: 'node2', color: 'pink', group: 1 },
    { source: 'node2', target: 'node3', color: 'pink', group: 1 },
    { source: 'node3', target: 'node4', color: 'pink', group: 1 },
    { source: 'node4', target: 'node5', color: 'pink', group: 1 },
    { source: 'node5', target: 'node6', color: 'pink', group: 1 },
    { source: 'node5', target: 'node7', color: 'pink', group: 1 },
    { source: 'node6', target: 'node8', color: 'pink', group: 1 },
    { source: 'node7', target: 'node9', color: 'pink', group: 1 },
    { source: 'node8', target: 'node10', color: 'pink', group: 1 },
    { source: 'node10', target: 'node11', color: 'pink', group: 1 },
    { source: 'node10', target: 'node12', color: 'pink', group: 1 },
    { source: 'node12', target: 'node13', color: 'pink', group: 1 },
    { source: 'node8', target: 'node13', color: 'pink', group: 1 },
    { source: 'node6', target: 'node7', color: 'pink', group: 1 },
    { source: 'node1', target: 'node20', color: 'pink', group: 1 },
    { source: 'node4', target: 'node20', color: 'pink', group: 1 },
    { source: 'node5', target: 'node20', color: 'pink', group: 1 },
    { source: 'node8', target: 'node133', color: 'pink', group: 1 },
    { source: 'node19', target: 'node133', color: 'pink', group: 1 },
    { source: 'node1', target: 'nodeM1', color: 'pink', group: 1 },
    { source: 'node4', target: 'nodeM1', color: 'pink', group: 1 },
  
    // Auditory network
    { source: 'node14', target: 'node15', color: 'pink', group: 2 },
    { source: 'node15', target: 'node16', color: 'pink', group: 2 },
    { source: 'node16', target: 'node17', color: 'pink', group: 2 },
    { source: 'node155', target: 'node16', color: 'pink', group: 2 },
    { source: 'node17', target: 'node18', color: 'pink', group: 2 },
    { source: 'node18', target: 'node19', color: 'pink', group: 2 },
    { source: 'node4', target: 'node20', color: 'pink', group: 2 },
    { source: 'node155', target: 'node20', color: 'pink', group: 2 },
  
    // Motor network
    { source: 'nodePMC', target: 'nodeM1', color: 'pink', group: 3 },
    { source: 'nodeSMA', target: 'nodeM1', color: 'pink', group: 3 },
    { source: 'nodeM1', target: 'nodeBG', color: 'pink', group: 3 },
    { source: 'nodeM1', target: 'nodeCB', color: 'pink', group: 3 },
    { source: 'nodeMAC', target: 'nodeM1', color: 'pink', group: 3 },
    { source: 'nodeM1', target: 'node19', color: 'pink', group: 3 },
    { source: 'nodeM1', target: 'node16', color: 'pink', group: 3 },
  
    // Central executive network
    { source: 'nodeDorsalDLPFC', target: 'nodeVLPFC', color: 'pink', group: 4 },
    { source: 'nodeDorsalDLPFC', target: 'nodeACC', color: 'pink', group: 4 },
    { source: 'nodeDorsalDLPFC', target: 'nodeIFG', color: 'pink', group: 4 },
    { source: 'nodeDorsalDLPFC', target: 'nodeOFC', color: 'pink', group: 4 },
    { source: 'nodeDorsalDLPFC', target: 'nodeMCC', color: 'pink', group: 4 },
    { source: 'nodeDorsalDLPFC', target: 'nodeDMPFC', color: 'pink', group: 4 },
    { source: 'nodeDorsalDLPFC', target: 'nodeLPFC', color: 'pink', group: 4 },
    { source: 'nodeACC', target: 'nodeIFG', color: 'pink', group: 4 },
    { source: 'nodeACC', target: 'nodeOFC', color: 'pink', group: 4 },
    { source: 'nodeACC', target: 'nodeMCC', color: 'pink', group: 4 },
    { source: 'nodeACC', target: 'nodeDMPFC', color: 'pink', group: 4 },
    { source: 'nodeACC', target: 'nodeLPFC', color: 'pink', group: 4 },
    { source: 'nodeACC', target: 'nodeTPJ', color: 'pink', group: 4 },
    { source: 'nodeIFG', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodeOFC', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodeMCC', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodeDMPFC', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodeLPFC', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodeTPJ', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodePCC', target: 'nodeMFC', color: 'pink', group: 4 },
    { source: 'nodeMFC_DMN', target: 'nodeDorsalDLPFC', color: 'pink', group: 4 },
  
    // CEN-Visual connection
    { source: 'nodeDorsalDLPFC', target: 'node12', color: 'pink', group: 4 },
  
    // CEN-Auditory connections
    { source: 'nodeVLPFC', target: 'node16', color: 'pink', group: 4 },
    { source: 'nodeVLPFC', target: 'node19', color: 'pink', group: 4 },
  
    // CEN-Motor connection
    { source: 'nodePMC', target: 'nodeDorsalDLPFC', color: 'pink', group: 4 },
  
    // CEN-DMN connections
    { source: 'nodeMFC_DMN', target: 'nodeIPL', color: 'pink', group: 4 },
    { source: 'nodeMFC_DMN', target: 'nodeLTC', color: 'pink', group: 4 },
    { source: 'nodeMFC_DMN', target: 'nodeHF', color: 'pink', group: 4 },
  
    // CEN-SN connection
    { source: 'nodeMFC_DMN', target: 'nodeAI', color: 'pink', group: 4 },
  
    // Salience network
    { source: 'nodeAI', target: 'nodeACC', color: 'pink', group: 5 },
    { source: 'nodeAI', target: 'nodeSMG', color: 'pink', group: 5 },
    { source: 'nodeACC', target: 'nodeDorsalDLPFC', color: 'pink', group: 5 },
    { source: 'nodeACC', target: 'nodeMFC', color: 'pink', group: 5 },
    { source: 'nodeSMG', target: 'nodeTPJ', color: 'pink', group: 5 },
    { source: 'nodeSMG', target: 'node19', color: 'pink', group: 5 },
  
    // SN-Visual connections
    { source: 'nodeAI', target: 'node8', color: 'pink', group: 5 },
    { source: 'nodeAI', target: 'node11', color: 'pink', group: 5 },
  
    // SN-Auditory connection
    { source: 'nodeAI', target: 'node16', color: 'pink', group: 5 },
  
    // SN-Motor connection
    { source: 'nodeAI', target: 'nodeM1', color: 'pink', group: 5 },
  
    // SN-CEN connections
    { source: 'nodeAI', target: 'nodeDorsalDLPFC', color: 'pink', group: 5 },
    { source: 'nodeAI', target: 'nodeACC', color: 'pink', group: 5 },
    { source: 'nodeACC', target: 'nodeDorsalDLPFC', color: 'pink', group: 5 },
  
    // SN-DMN connections
    { source: 'nodeAI', target: 'nodeMFC_DMN', color: 'pink', group: 5 },
    { source: 'nodeACC', target: 'nodeMFC_DMN', color: 'pink', group: 5 },
  
    // Default mode network
    { source: 'nodePCC', target: 'nodeLPFC', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeHF', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeIPL', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeLTC', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeLTC', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeHF', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeLPFC', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeHF', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeIPL', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeLTC', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeLPFC', color: 'pink', group: 6 },
    { source: 'nodeHF', target: 'nodeIPL', color: 'pink', group: 6 },
    { source: 'nodeHF', target: 'nodeLTC', color: 'pink', group: 6 },
    { source: 'nodeHF', target: 'nodeLPFC', color: 'pink', group: 6 },
    { source: 'nodeIPL', target: 'nodeLTC', color: 'pink', group: 6 },
    { source: 'nodeIPL', target: 'nodeLPFC', color: 'pink', group: 6 },
    { source: 'nodeLTC', target: 'nodeLPFC', color: 'pink', group: 6 },
    { source: 'nodePCC', target: 'nodeMFC_DMN', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeMFC_DMN', color: 'pink', group: 6 },
    { source: 'nodeHF', target: 'nodeMFC_DMN', color: 'pink', group: 6 },
    { source: 'nodeIPL', target: 'nodeMFC_DMN', color: 'pink', group: 6 },
    { source: 'nodeLTC', target: 'nodeMFC_DMN', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeMFC_DMN', color: 'pink', group: 6 },
  
    // DMN-CEN connections
    { source: 'nodePCC', target: 'nodeDorsalDLPFC', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeDorsalDLPFC', color: 'pink', group: 6 },
    { source: 'nodeHF', target: 'nodeDorsalDLPFC', color: 'pink', group: 6 },
    { source: 'nodeIPL', target: 'nodeDorsalDLPFC', color: 'pink', group: 6 },
    { source: 'nodeLTC', target: 'nodeDorsalDLPFC', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeDorsalDLPFC', color: 'pink', group: 6 },
  
    // DMN-SN connections
    { source: 'nodePCC', target: 'nodeAI', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeAI', color: 'pink', group: 6 },
    { source: 'nodeHF', target: 'nodeAI', color: 'pink', group: 6 },
    { source: 'nodeIPL', target: 'nodeAI', color: 'pink', group: 6 },
    { source: 'nodeLTC', target: 'nodeAI', color: 'pink', group: 6 },
    { source: 'nodeLPFC', target: 'nodeAI', color: 'pink', group: 6 },
  
    // WMN-Visual connections
    { source: 'nodeLPFC', target: 'node8', color: 'pink', group: 4 },
  
    // WMN-Auditory connection
    { source: 'nodeLPFC', target: 'node16', color: 'pink', group: 4 },
  
    // WMN-Motor connection
    { source: 'nodeLPFC', target: 'nodeM1', color: 'pink', group: 4 },
  
    // WMN-CEN connections
    { source: 'nodeLPFC', target: 'nodeDorsalDLPFC', color: 'pink', group: 4 },
    { source: 'nodeLPFC', target: 'nodeACC', color: 'pink', group: 4 },
    { source: 'nodeLPFC', target: 'nodeTPJ', color: 'pink', group: 4 },
  
    // WMN-SN connections
    { source: 'nodeLPFC', target: 'nodeAI', color: 'pink', group: 4 },
  
    // WMN-DMN connections
    { source: 'nodeLPFC', target: 'nodePCC', color: 'pink', group: 4 },
    { source: 'nodeLPFC', target: 'nodeHF', color: 'pink', group: 4 },
    { source: 'nodeLPFC', target: 'nodeIPL', color: 'pink', group: 4 },
    { source: 'nodeLPFC', target: 'nodeLTC', color: 'pink', group: 4 },
  
    // CEN-WMN connections
    { source: 'nodeACC', target: 'nodeLPFC', color: 'pink', group: 4 },
    { source: 'nodeTPJ', target: 'nodeLPFC', color: 'pink', group: 4 },
  
    // SN-WMN connections
    { source: 'nodeAI', target: 'nodeLPFC', color: 'pink', group: 5 },
  ]
};

const Home = () => {
  const [activeTab, setActiveTab] = useState('visual');
  

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tab) => {
    console.log('Tab clicked:', tab);
    setActiveTab(tab);
  };

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

  const referencedNodeIds = new Set(
    graphData.links.flatMap(link => [link.source, link.target])
  );

  const filteredNodes = graphData.nodes.filter(node => {
    if (activeTab === 'visual') return node.group === 1 || referencedNodeIds.has(node.id);
    if (activeTab === 'auditory') return node.group === 2 || referencedNodeIds.has(node.id);
    if (activeTab === 'motor') return node.group === 3 || referencedNodeIds.has(node.id);
    if (activeTab === 'executive') return node.group === 4 || referencedNodeIds.has(node.id);
    if (activeTab === 'salience') return node.group === 5 || referencedNodeIds.has(node.id);
    if (activeTab === 'defaultmode') return node.group === 6 || referencedNodeIds.has(node.id);
    if (activeTab === 'all') return node.group === 1,2,3,4,5,6 || referencedNodeIds.has(node.id);
    return false;
  });

  const filteredLinks = graphData.links.filter(link => {
    if (activeTab === 'visual') return link.group === 1;
    if (activeTab === 'auditory') return link.group === 2;
    if (activeTab === 'motor') return link.group === 3;
    if (activeTab === 'executive') return link.group === 4;
    if (activeTab === 'salience') return link.group === 5;
    if (activeTab === 'defaultmode') return link.group === 6;
    if (activeTab === 'all') return link.group === 1,2,3,4,5,6;
    return false;
  });

  console.log('Filtered Nodes:', filteredNodes);
  console.log('Filtered Links:', filteredLinks);

  return (
    <>
    <div className='bg-base max-w-6xl'>
      <div className='min-h-screen'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center justify-center max-h-[300px]' style={{ transform: "scale(0.7)" }}>
            <ForceGraph2D
            graphData={{ nodes: filteredNodes, links: filteredLinks }}
            nodeLabel="name"
            nodeVal={3}
            nodeColor={getNodeColor}
            linkDirectionalArrowLength={0}
            linkCurvature={0.25}
            />
          </div>
          
          <div className='flex items-center justify-center mt-20 z-50'>
            <HomeList 
            handleTabClick={handleTabClick} 
            activeTab={activeTab} 
            />
          </div>

          <div className='flex items-center justify-center'>
            {activeTab === 'visual' && <></> }
            {activeTab === 'auditory' && <></> }
            {activeTab === 'motor' && <></> }
            {activeTab === 'executive' && <></> }
            {activeTab === 'defaultmode' && <></> }
            {activeTab === 'salience' && <></> }
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;