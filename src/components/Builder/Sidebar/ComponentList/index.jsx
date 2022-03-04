import styled from "styled-components";

import { useBuilderContext } from "contexts";

const ComponentList = () => {
  const { components } = useBuilderContext();

  const onDragStart = (event, component) => {
    event.dataTransfer.setData("builder/name", component.componentName);
    event.dataTransfer.effectAllowed = "move";
  };

  return components ? (
    <ListWrapper>
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
`;

const Item = styled.div`
  cursor: pointer;
  margin: 5px;
  padding: 30px;
  text-align: center;

  &:hover {
    background-color: #0b0b0b;
  }
`;
