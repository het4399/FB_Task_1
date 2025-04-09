import { Background, ReactFlow } from "@xyflow/react";
import ButtonHandleDemo from "./components/ButtonHandleDemo";
import '@xyflow/react/dist/style.css';

const defaultNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Node" },
    type: "ButtonHandleDemo",
  },
];

const nodeTypes = {
  ButtonHandleDemo: ButtonHandleDemo,
};

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow defaultNodes={defaultNodes} nodeTypes={nodeTypes} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}