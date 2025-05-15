
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, ArrowRight, Settings } from "lucide-react";

const NodePanel = () => {
  const [expanded, setExpanded] = useState(true);
  
  const nodeTypes = [
    {
      id: 'system',
      name: 'System Prompt',
      icon: <Settings className="w-4 h-4" />,
      description: 'Sets AI personality and behavior',
      color: 'bg-flow-system'
    },
    {
      id: 'input',
      name: 'User Input',
      icon: <Input className="w-4 h-4" />,
      description: 'Processes user message',
      color: 'bg-flow-input'
    },
    {
      id: 'output',
      name: 'AI Response',
      icon: <MessageSquare className="w-4 h-4" />,
      description: 'Generates AI reply',
      color: 'bg-flow-output'
    },
    {
      id: 'action',
      name: 'Action',
      icon: <ArrowRight className="w-4 h-4" />,
      description: 'Performs a specific task',
      color: 'bg-amber-700'
    },
    {
      id: 'api',
      name: 'API Call',
      icon: <ArrowRight className="w-4 h-4" />,
      description: 'Connect to external services',
      color: 'bg-pink-700'
    },
    {
      id: 'config',
      name: 'Configuration',
      icon: <Settings className="w-4 h-4" />,
      description: 'Adjust model parameters',
      color: 'bg-blue-700'
    }
  ];

  return (
    <div className={`${expanded ? 'w-64' : 'w-16'} bg-gray-900 border-r border-gray-800 flex flex-col`}>
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        {expanded && <h2 className="text-sm font-semibold">Node Types</h2>}
        <Button 
          variant="ghost" 
          size="sm"
          className="ml-auto"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '<' : '>'}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {nodeTypes.map((nodeType) => (
          <div 
            key={nodeType.id}
            className="flex items-center p-2 rounded cursor-move hover:bg-gray-800"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('nodeType', nodeType.id);
            }}
          >
            <div className={`${nodeType.color} p-2 rounded mr-3`}>
              {nodeType.icon}
            </div>
            {expanded && (
              <div>
                <p className="text-sm font-medium">{nodeType.name}</p>
                <p className="text-xs text-gray-400">{nodeType.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodePanel;
