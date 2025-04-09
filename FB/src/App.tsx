import { Background, BackgroundProps, BackgroundVariant, Connection, ControlButton, Controls, MiniMap, NodeToolbar, ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges, useEdgesState, useNodesState } from "@xyflow/react";
import ButtonHandleDemo from "./components/ButtonHandleDemo";
import '@xyflow/react/dist/style.css';
import { useState, useCallback } from 'react';
import { defaultNodes } from "./components/Nodes";
import LeadSourceNode from "./components/LeadSource";


const nodeTypes = {
  leadSource: LeadSourceNode,
  ButtonHandleDemo: ButtonHandleDemo,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Lines);
  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));  // Add the new edge to the existing edges
    },
    [],
  );

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} edges={edges} fitView>
        <Background variant={variant} />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}