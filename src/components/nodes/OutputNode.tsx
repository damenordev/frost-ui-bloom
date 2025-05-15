
import { Handle, Position } from '@xyflow/react';

const OutputNode = ({ data, selected }) => {
  return (
    <div className={`p-4 bg-flow-output rounded-lg min-w-[180px] ${selected ? 'ring-2 ring-flow-selected' : ''}`}>
      <div className="flex items-center mb-2">
        <div className="bg-green-900 p-1 rounded mr-2">
          <span className="text-xs">output</span>
        </div>
        <div className="text-sm font-medium text-white">{data?.label || 'AI Response'}</div>
      </div>
      <div className="text-xs text-gray-300">
        Generate AI reply
      </div>
      
      {/* Handles for connections */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-2 h-2 bg-green-400" 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-2 h-2 bg-green-400" 
      />
    </div>
  );
};

export default OutputNode;
