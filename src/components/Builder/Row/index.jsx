import { Draggable } from "react-beautiful-dnd";

import ItemList from "../ItemList";

const Row = ({ index, section, ...props }) => (
  <Draggable draggableId={section.id} index={index}>
    {(provided, snapshot) => (
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

export default Row;
