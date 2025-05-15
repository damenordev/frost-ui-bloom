
import { useEffect, useState } from 'react';
import FlowNavbar from '@/components/FlowNavbar';
import NodePanel from '@/components/NodePanel';
import FlowCanvas from '@/components/FlowCanvas';
import PropertiesPanel from '@/components/PropertiesPanel';

const Index = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  
  return (
    <div className="flex flex-col h-screen bg-flow-background text-flow-text">
      <FlowNavbar />
      <div className="flex flex-1 overflow-hidden">
        <NodePanel />
        <FlowCanvas 
          selectedNode={selectedNode} 
          setSelectedNode={setSelectedNode} 
        />
        <PropertiesPanel selectedNode={selectedNode} />
      </div>
    </div>
  );
};

export default Index;
