
import { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  addEdge,
  Panel,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import SystemNode from './nodes/SystemNode';
import InputNode from './nodes/InputNode';
import OutputNode from './nodes/OutputNode';
import { createNode, getInitialNodes, getInitialEdges } from '@/lib/flowUtils';

const nodeTypes = {
  system: SystemNode,
  input: InputNode,
  output: OutputNode,
};

const FlowCanvas = ({ selectedNode, setSelectedNode }) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(getInitialNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(getInitialEdges());
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const nodeType = event.dataTransfer.getData('nodeType');
      if (!nodeType || !reactFlowInstance || !reactFlowWrapper.current) {
        return;
      }

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = createNode(nodeType, position);
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, [setSelectedNode]);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  return (
    <div className="flex-1 h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        fitView
        style={{ background: '#1A1A25' }}
      >
        <Background 
          gap={20} 
          color="#242535" 
          variant="lines" 
        />
        <Controls className="bg-gray-800 border border-gray-700 rounded-md" />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.type) {
              case 'system':
                return '#6B2BAF';
              case 'input':
                return '#2B3968';
              case 'output':
                return '#286E47';
              default:
                return '#888';
            }
          }}
          maskColor="rgba(26, 26, 37, 0.7)"
          style={{ backgroundColor: '#1A1A25', right: 10, bottom: 10 }}
        />
        <Panel position="bottom-center" className="bg-gray-800 p-2 rounded-t-md border border-gray-700">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-flow-system"></div>
              <span>System</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-flow-input"></div>
              <span>Input</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-flow-output"></div>
              <span>Output</span>
            </div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
