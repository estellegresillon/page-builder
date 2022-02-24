import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useBuilderContext } from "contexts";

import Row from "./Row";

const Builder = () => {
  const {
    components,
    json,
    removeComponent,
    selectComponent,
    selectedComponent,
    updateDocument,
    updateSingles,
  } = useBuilderContext();

  const [sections, updateSections] = useState([]);

  const handleClick = (e, item) => {
    e.stopPropagation();
    selectComponent(item);
  };

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;

      if (key === "Backspace") {
        removeComponent(selectedComponent);
      }
    },
    [removeComponent, selectedComponent]
  );

  const handleOnDragEnd = (result) => {
    if (
      !result.destination ||
      result.destination.droppableId !== result.source.droppableId
    ) {
      return;
    }

    if (result.type === "SINGLE") {
      updateSingles(
        result.destination.droppableId,
        result.source.index,
        result.destination.index
      );
    }

    if (result.type === "SECTION") {
      const items = [...sections];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      updateSections(items);
      updateDocument(items);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    updateSections(json);
  }, [json]);

  return (
    <BuilderWrapper onClick={() => selectComponent()}>
      {sections?.length > 0 ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="body" type="SECTION">
            {(provided) => (
              <RowWrapper {...provided.droppableProps} ref={provided.innerRef}>
                {sections.map((section, index) => {
                  const Component = components[section.componentName];

                  return (
                    <Row
                      Component={Component}
                      components={components}
                      selectedComponent={selectedComponent}
                      handleClick={handleClick}
                      index={index}
                      key={section.id}
                      section={section}
                    />
                  );
                })}
                {provided.placeholder}
              </RowWrapper>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div>Add your first element.</div>
      )}
    </BuilderWrapper>
  );
};

export default Builder;

const BuilderWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const RowWrapper = styled.div`
  width: 100%;

  > div {
    height: 200px;
  }
`;
