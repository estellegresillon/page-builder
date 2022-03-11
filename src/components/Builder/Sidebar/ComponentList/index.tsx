import styled from 'styled-components';

import { useBuilderContext } from 'contexts';
import { ComponentProps } from 'types/component';

const ComponentList = () => {
  const { components } = useBuilderContext();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    component: ComponentProps,
  ) => {
    if (event?.dataTransfer) {
      event.dataTransfer.setData('builder/name', component.componentName);
      event.dataTransfer.effectAllowed = 'move';
    }
  };

  return components ? (
    <ListWrapper>
      <div className="list-title">Component list</div>
      {Object.keys(components).map((component) => (
        <Item
          draggable
          key={component}
          onDragStart={(e) => onDragStart(e, components[component])}
        >
          {component}
        </Item>
      ))}
    </ListWrapper>
  ) : null;
};

export default ComponentList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .list-title {
    margin: 30px 0 25px 0;
    text-align: center;
    width: 100%;
  }
`;

const Item = styled.div`
  border-radius: 2px;
  cursor: grab;
  font-weight: bolder;
  margin: 5px 10px;
  padding: 30px;
  text-align: center;
  border: 1px solid gray;

  &:hover {
    background-color: #36383b;
  }
`;
