import { useState } from "react";
import styled from "styled-components";

import IconBack from "components/common/IconBack";
import Height from "components/Settings/Height";
import { useBuilderContext } from "contexts";

const Settings = ({ selectedComponent }) => {
  const { selectComponent, updateAttributes } = useBuilderContext();
  const { attributes } = selectedComponent;
  const [heightValue, setHeightValue] = useState(attributes.height);
  const attributesList = Object.keys(selectedComponent.attributes);

  const updateHeight = (e) => {
    const newHeightValue = e.target.value;
    setHeightValue(newHeightValue);
    updateAttributes(selectedComponent.id, { height: newHeightValue });
  };

  return (
    <SettingsWrapper id="settings">
      <div className="close-settings" onClick={() => selectComponent(null)}>
        <IconBack /> <div>Edit {selectedComponent?.componentName}</div>
      </div>
      <div className="settings-content">
        {attributesList.map((attribute) => {
          switch (attribute) {
            case "height":
              return (
                <Height
                  attribute={attribute}
                  attributes={attributes}
                  heightValue={heightValue}
                  key={attribute}
                  updateHeight={updateHeight}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </SettingsWrapper>
  );
};

export default Settings;

const SettingsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  .close-settings {
    display: flex;
    margin: 20px;

    svg {
      cursor: pointer;
      height: 15px;
      margin-right: 20px;
      width: 15px;
    }
  }

  .settings-content {
    .attribute-name {
      text-transform: capitalize;
    }
  }
`;
