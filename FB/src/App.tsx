import { Background, BackgroundProps, BackgroundVariant, ControlButton, Controls, MiniMap, NodeToolbar, ReactFlow, applyEdgeChanges, applyNodeChanges, useEdgesState, useNodesState } from "@xyflow/react";
import ButtonHandleDemo from "./components/ButtonHandleDemo";
import '@xyflow/react/dist/style.css';
import { useState, useCallback } from 'react';
import { defaultNodes } from "./components/Nodes";


const nodeTypes = {
  ButtonHandleDemo: ButtonHandleDemo,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Lines);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView>
        <Background variant={variant} />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}