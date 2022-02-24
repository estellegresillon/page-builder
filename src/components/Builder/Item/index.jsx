import { Draggable } from "react-beautiful-dnd";

const ItemList = ({
  Component,
  handleClick,
  index,
  selectedComponent,
  single,
}) => (
  <Draggable draggableId={single.id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <Component
          $isSelected={single.id === selectedComponent?.id}
          item={single}
          index={index}
          onClick={(e) => handleClick(e, single)}
        />
      </div>
    )}
  </Draggable>
);

export default ItemList;
