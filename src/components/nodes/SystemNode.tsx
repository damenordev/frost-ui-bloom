
import { Handle, Position } from '@xyflow/react';

const SystemNode = ({ data, selected }) => {
  return (
    <div className={`p-4 bg-flow-system rounded-lg min-w-[180px] ${selected ? 'ring-2 ring-flow-selected' : ''}`}>
      <div className="flex items-center mb-2">
        <div className="bg-purple-900 p-1 rounded mr-2">
          <span className="text-xs">system</span>
        </div>
        <div className="text-sm font-medium text-white">{data?.label || 'System Prompt'}</div>
      </div>
      <div className="text-xs text-gray-300">
        Defines AI behavior & personality
      </div>
      
      {/* Handles for connections */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-2 h-2 bg-purple-400" 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-2 h-2 bg-purple-400" 
      />
    </div>
  );
};

export default SystemNode;
