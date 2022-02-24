import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import React from "react";

const Menu = ({ onClose }) => {
  const { addComponent, components } = useBuilderContext();

  const onClick = (componentName) => {
    const { componentType } = components[componentName];
    addComponent({ componentName, componentType });
  };

  const handleOnDragEnd = (result) => {
    console.log(result, "hiii");
    if (!result.destion) {
      return;
    }
  };

  return (
    <MenuWrapper>
      <div onClick={onClose}>close</div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="menu">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {Object.keys(components).map((component, index) => (
                <Draggable
                  draggableId={component}
                  index={index}
                  key={component}
                >
                  {(provided, snapshot) => (
                    <React.Fragment>
                      <Item
                        ref={provided.innerRef}
                        onClick={() => onClick(component)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          transform: snapshot.isDragging
                            ? provided.draggableProps.style?.transform
                            : "translate(0px, 0px)",
                        }}
                      >
                        {component}
                      </Item>
                      {snapshot.isDragging && (
                        <Item style={{ transform: "none !important" }}>
                          {component}
                        </Item>
                      )}
                    </React.Fragment>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 66.5px 0 rgb(0 0 0 / 18%);
  display: flex;
  flex-direction: column;
  max-height: 500px;
  position: absolute;
  overflow: scroll;
  top: 40px;
  width: 250px;
  z-index: 1;
`;

const Item = styled.div`
  color: black;
  margin: 5px;
  padding: 30px;
  text-align: center;

  &:hover {
    background-color: #e9e9e9;
  }
`;
