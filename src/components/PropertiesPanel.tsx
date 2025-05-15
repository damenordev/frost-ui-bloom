
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PropertiesPanel = ({ selectedNode }) => {
  if (!selectedNode) {
    return (
      <div className="w-64 bg-gray-900 border-l border-gray-800 p-4">
        <div className="text-center pt-12">
          <p className="text-sm text-gray-400">No node selected</p>
          <p className="text-xs text-gray-500 mt-2">Click on a node in the canvas to see its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-900 border-l border-gray-800 overflow-y-auto">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-sm font-semibold">Properties</h2>
        <p className="text-xs text-gray-400">Configure the selected node</p>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Node Name</Label>
          <Input 
            id="name" 
            value={selectedNode.data?.label || selectedNode.type} 
            onChange={() => {}} 
            className="bg-gray-800 border-gray-700"
          />
        </div>
        
        {selectedNode.type === 'system' && (
          <div className="space-y-2">
            <Label htmlFor="prompt">System Prompt</Label>
            <Textarea 
              id="prompt" 
              value={selectedNode.data?.prompt || ""} 
              onChange={() => {}} 
              className="bg-gray-800 border-gray-700 min-h-32"
              placeholder="Define AI behavior & personality..."
            />
          </div>
        )}
        
        {selectedNode.type === 'input' && (
          <div className="space-y-2">
            <Label htmlFor="input-handling">Input Handling</Label>
            <Textarea 
              id="input-handling" 
              value={selectedNode.data?.handling || ""} 
              onChange={() => {}} 
              className="bg-gray-800 border-gray-700"
              placeholder="How to process user input..."
            />
          </div>
        )}
        
        {selectedNode.type === 'output' && (
          <div className="space-y-2">
            <Label htmlFor="output-template">Response Template</Label>
            <Textarea 
              id="output-template" 
              value={selectedNode.data?.template || ""} 
              onChange={() => {}} 
              className="bg-gray-800 border-gray-700"
              placeholder="Template for AI responses..."
            />
          </div>
        )}
        
        <div className="space-y-2 pt-4">
          <Button className="w-full">Apply Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
