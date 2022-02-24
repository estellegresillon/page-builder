import { Link } from "react-router-dom";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { saveDocumentInLocalStorage } from "utils/localStorage";

const Menu = () => {
  const { addComponent, resetJson, components, json } = useBuilderContext();

  const onClick = (componentName) => {
    const { componentType } = components[componentName];
    addComponent({ componentName, componentType });
  };

  const handleSaveDocument = () => {
    saveDocumentInLocalStorage(json);
  };

  return (
    <MenuWrapper>
      {Object.keys(components).map((component) => (
        <div key={component} onClick={() => onClick(component)}>
          {component}
        </div>
      ))}
      <div onClick={() => handleSaveDocument()}>Save</div>
      <div onClick={() => resetJson()}>Clean</div>
      <div>
        <Link to="/">Builder</Link>
      </div>
      <div>
        <Link to="/prod">Prod</Link>
      </div>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100px;

  div {
    margin: 20px;
    text-align: center;
  }
`;
