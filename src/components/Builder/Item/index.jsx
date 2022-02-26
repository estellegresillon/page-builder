import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Item = ({ Component, handleClick, index, selectedComponent, single }) => (
  <ItemWrapper>
    <Draggable
      isDragDisabled={selectedComponent?.id !== single.id}
      draggableId={single.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Component
            $isSelected={single.id === selectedComponent?.id}
            item={single}
            onClick={(e) => handleClick(e, single)}
          />
        </div>
      )}
    </Draggable>
  </ItemWrapper>
);

const ItemWrapper = styled.div`
  width: 50%;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Item;
