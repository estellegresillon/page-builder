import styled from "styled-components";

import { useBuilderContext } from "contexts";
import React from "react";

const Menu = () => {
  const { addComponent, components } = useBuilderContext();

  const onClick = (componentName) => {
    addComponent({ componentName });
  };

  return (
    <MenuWrapper>
      {Object.keys(components).map((component) => (
        <Item key={component} onClick={() => onClick(component)}>
          {component}
        </Item>
      ))}
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
  min-height: calc(100vh - 60px);
  width: 250px;
`;

const Item = styled.div`
  color: black;
  cursor: pointer;
  margin: 5px;
  padding: 30px;
  text-align: center;

  &:hover {
    background-color: #e9e9e9;
  }
`;
