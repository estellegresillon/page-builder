import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Empty from 'components/common/Empty';
import ProdMenu from 'components/common/ProdMenu';
import Sidebar from 'components/Builder/Sidebar';
import TopBar from 'components/Builder/TopBar';
import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';
import { initialAttributes } from 'utils/getInitialAttributes';
import { createNewItem } from 'utils/helpers';

import Row from './Row';

const Builder = (): JSX.Element => {
  const {
    components,
    json,
    projectFont,
    selectComponent,
    selectedComponent,
    updateDocument,
  } = useBuilderContext();

  const [sections, moveSections] = useState<IItem[]>([]);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.type === 'SECTION') {
      const items = [...sections];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      moveSections(items);
      updateDocument(items);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const componentName = event.dataTransfer.getData('builder/name');
    const attributes = initialAttributes[componentName];

    if (!componentName) {
      return null;
    }

    const dropEl = event.target as HTMLDivElement;
    const items = [...sections];
    const index = items.findIndex((section) => section.id === dropEl.id);

    const newChild = createNewItem({
      attributes,
      componentName,
      id: '',
    });

    if (index >= 0) {
      items.splice(index + 1, 0, newChild);
    } else {
      items.push(newChild);
    }

    updateDocument(items);
  };

  useEffect(() => {
    moveSections(json);
  }, [json]);

  return (
    <>
      <TopBar />
      <BuilderWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Sidebar />
          <PlayGroundWrapper
            $font={projectFont}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            <ProdMenu />
            {sections?.length > 0 ? (
              <Droppable droppableId="body" type="SECTION">
                {(provided) => (
                  <RowWrapper
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {sections.map((section, index) => {
                      if (!section?.componentName) {
                        return null;
                      }

                      const Component = components[section.componentName];

                      return (
                        <div
                          key={section.id}
                          style={{ minHeight: section.attributes.height }}
                        >
                          <Row
                            Component={Component}
                            components={components}
                            handleClick={() => selectComponent(section)}
                            index={index}
                            selectedComponent={selectedComponent}
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
              <Empty text="Add your first element." />
            )}
          </PlayGroundWrapper>
        </DragDropContext>
      </BuilderWrapper>
    </>
  );
};

export default Builder;

const BuilderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 70px);
  position: relative;
  width: 100%;
`;

const PlayGroundWrapper = styled.div<{ $font: string }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${({ $font }) => $font};
  height: calc(100vh - 270px);
  overflow: scroll;
  padding-bottom: 200px;
  position: relative;
  width: calc(100vw - 250px);
  z-index: 0;
`;

const RowWrapper = styled.div`
  width: 100%;

  .placeholder {
    background: pink;
    width: 100%;
    height: 100px;
  }
`;
