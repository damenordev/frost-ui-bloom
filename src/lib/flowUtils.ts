
import { Node, Edge } from '@xyflow/react';

export const createNode = (type: string, position: { x: number; y: number }) => {
  const id = `${type}-${Date.now()}`;
  
  const nodeData = {
    id,
    type,
    position,
    data: {
      label: getDefaultLabel(type),
    },
  };
  
  return nodeData;
};

export const getDefaultLabel = (type: string) => {
  switch (type) {
    case 'system':
      return 'System Prompt';
    case 'input':
      return 'User Input';
    case 'output':
      return 'AI Response';
    case 'action':
      return 'Action';
    case 'api':
      return 'API Call';
    case 'config':
      return 'Configuration';
    default:
      return 'Node';
  }
};

export const getInitialNodes = (): Node[] => [
  {
    id: 'system-1',
    type: 'system',
    position: { x: 250, y: 50 },
    data: { 
      label: 'System Prompt',
      prompt: 'Defines AI behavior & personality'
    }
  },
  {
    id: 'input-1',
    type: 'input',
    position: { x: 250, y: 200 },
    data: { 
      label: 'User Input',
      handling: 'Process user messages'
    }
  },
  {
    id: 'output-1',
    type: 'output',
    position: { x: 250, y: 350 },
    data: { 
      label: 'AI Response',
      template: 'Generate AI reply'
    }
  }
];

export const getInitialEdges = (): Edge[] => [
  {
    id: 'e-system-input',
    source: 'system-1',
    target: 'input-1',
    animated: true,
  },
  {
    id: 'e-input-output',
    source: 'input-1',
    target: 'output-1',
    animated: true,
  }
];
