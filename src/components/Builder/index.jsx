import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Menu from "components/common/Menu";
import { useBuilderContext } from "contexts";

import Row from "./Row";

const Builder = () => {
  const {
    components,
    json,
    removeComponent,
    selectParentComponent,
    selectedParentComponent,
    selectSingleComponent,
    selectedSingleComponent,
    updateDocument,
    moveSingles,
  } = useBuilderContext();

  const [sections, moveSections] = useState([]);

  const handleParentClick = (e, item) => {
    selectParentComponent(item);
    selectSingleComponent(null);
  };

  const handleSingleClick = (e, item, parent) => {
    e.stopPropagation();
    selectSingleComponent(item);
    selectParentComponent(parent);
  };

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;

      if (key === "Backspace") {
        if (!selectedParentComponent && !selectedSingleComponent) {
          return null;
        }

        const selectedComponent =
          selectedSingleComponent || selectedParentComponent;

        removeComponent(selectedComponent);
      }
    },
    [removeComponent, selectedParentComponent, selectedSingleComponent]
  );

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.type === "SINGLE") {
      moveSingles(
        result.destination.droppableId,
        result.source.index,
        result.destination.index
      );
    }

    if (result.type === "SECTION") {
      const items = [...sections];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      moveSections(items);
      updateDocument(items);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    moveSections(json);
  }, [json]);

  return (
    <BuilderWrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Menu onDragEnd={handleOnDragEnd} />
        <PlayGroundWrapper>
          {sections?.length > 0 ? (
            <Droppable droppableId="body" type="SECTION">
              {(provided) => (
                <RowWrapper
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sections.map((section, index) => {
                    const Component = components[section.componentName];

                    return (
                      <div
                        key={section.id}
                        style={{ minHeight: section.attributes.height }}
                      >
                        <Row
                          Component={Component}
                          components={components}
                          handleParentClick={handleParentClick}
                          handleSingleClick={handleSingleClick}
                          index={index}
                          selectedParentComponent={selectedParentComponent}
                          selectedSingleComponent={selectedSingleComponent}
                          section={section}
                        />
                      </div>
                    );
                  })}
                  {provided.placeholder}
                </RowWrapper>
              )}
            </Droppable>
          ) : (
            <div>Add your first element.</div>
          )}
        </PlayGroundWrapper>
      </DragDropContext>
    </BuilderWrapper>
  );
};

export default Builder;

const BuilderWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: calc(100vh - 260px);
  position: relative;
  width: 100%;
`;

const PlayGroundWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 260px);
  overflow: scroll;
  padding-bottom: 200px;
  position: relative;
  width: calc(100vw - 250px);
`;

const RowWrapper = styled.div`
  width: 100%;
`;
