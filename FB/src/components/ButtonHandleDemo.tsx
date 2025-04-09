import { Plus } from "lucide-react";
import { ConnectionState, Position, useConnection } from "@xyflow/react";
 
import { ButtonHandle } from "@/components/button-handle";
import { BaseNode } from "@/components/base-node";
 
import { Button } from "@/components/ui/button";
 
const onClick = () => {
  window.alert(`Handle button has been clicked!`);
};
 
const selector = (connection: ConnectionState) => {
  return connection.inProgress;
};
 
const ButtonHandleDemo = () => {
  const connectionInProgress = useConnection(selector);
 
  return (
    <BaseNode>
     Sequence Start Point
      <ButtonHandle
        type="target"
        position={Position.Bottom}
        showButton={!connectionInProgress}
      >
        <Button
          onClick={onClick}
          size="sm"
          variant="outline"
          className="square primary"
        >
          <Plus size={10} />
        </Button>
      </ButtonHandle>
    </BaseNode>
  );
};
 
export default ButtonHandleDemo;