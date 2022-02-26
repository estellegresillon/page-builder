import { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import ItemList from "../ItemList";

const Row = ({ index, section, ...props }) => {
  const [isDragDisabled, setIsDragDisabled] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const { cursor } = getComputedStyle(e.target);
      setIsDragDisabled(cursor === "row-resize");
    });
  }, []);

  return (
    <Draggable
      isDragDisabled={isDragDisabled}
      draggableId={section.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ItemList section={section} index={index} {...props} />
        </div>
      )}
    </Draggable>
  );
};

export default Row;
