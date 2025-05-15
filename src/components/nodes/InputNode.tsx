
import { Handle, Position } from '@xyflow/react';

const InputNode = ({ data, selected }) => {
  return (
    <div className={`p-4 bg-flow-input rounded-lg min-w-[180px] ${selected ? 'ring-2 ring-flow-selected' : ''}`}>
      <div className="flex items-center mb-2">
        <div className="bg-blue-900 p-1 rounded mr-2">
          <span className="text-xs">input</span>
        </div>
        <div className="text-sm font-medium text-white">{data?.label || 'User Input'}</div>
      </div>
      <div className="text-xs text-gray-300">
        Process user messages
      </div>
      
      <div className="mt-3 bg-gray-800 p-2 rounded text-xs">
        {'{input}'}
      </div>
      
      {/* Handles for connections */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-2 h-2 bg-blue-400" 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-2 h-2 bg-blue-400" 
      />
    </div>
  );
};

export default InputNode;
