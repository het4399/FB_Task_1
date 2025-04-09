import React from "react";
import { Handle, Position } from "@xyflow/react";

// Define a type for the props if needed. For example:

const LeadSourceNode: React.FC = () => {
    return (
        <div style={{ padding: 15, border: "2px dashed #ccc", borderRadius: 8, background: "#f8f9fa" }}>
            <strong>+ Add Lead Source</strong>
            <div style={{ fontSize: 12, marginTop: 4 }}>Click to add leads from List or CRM</div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
};

export default LeadSourceNode;
