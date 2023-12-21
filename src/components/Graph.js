import React, { useEffect, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const Graph = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    fetch('/.netlify/functions/getGraphData')
      .then(response => response.json())
      .then(data => {
        setGraphData(data);
      })
      .catch(error => {
        console.error('Error fetching graph data:', error);
      });
  }, []);

  return (
    <ForceGraph2D
    graphData={graphData}
    nodeLabel="id"
    nodeAutoColorBy="group"
    linkDirectionalArrowLength={3.5}
    linkDirectionalArrowRelPos={1}
    linkCurvature={0.25}
    />
  );
};

export default Graph;
