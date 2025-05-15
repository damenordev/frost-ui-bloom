
import { Button } from "@/components/ui/button";
import { Settings, Save, ArrowRight } from "lucide-react";

const FlowNavbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">AI Flow Builder</h1>
        <p className="text-sm text-gray-400">Drag nodes to create your custom AI thinking flow</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className="text-sm">
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          Import
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          Export
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          <Settings className="w-4 h-4" />
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <ArrowRight className="w-4 h-4 mr-2" />
          Run Flow
        </Button>
      </div>
    </div>
  );
};

export default FlowNavbar;
