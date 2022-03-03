import styled from "styled-components";

import IconBack from "components/common/IconBack";
import Height from "components/Settings/Height";
import Text from "components/Settings/Text";
import TextColor from "components/Settings/TextColor";
import Unsplash from "components/Settings/Unsplash";
import { useBuilderContext } from "contexts";

const Settings = ({ selectedComponent }) => {
  const { selectComponent } = useBuilderContext();
  const { attributes } = selectedComponent;

  const attributesList = Object.keys(selectedComponent.attributes);

  return (
    <SettingsWrapper id="settings">
      <div className="close-settings" onClick={() => selectComponent(null)}>
        <IconBack /> <div>Edit {selectedComponent?.componentName}</div>
      </div>
      <div className="settings-content">
        {attributesList.map((attributeName) => {
          switch (attributeName) {
            case "backgroundImage":
              return (
                <Unsplash
                  attributeName={attributeName}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "height":
              return (
                <Height
                  attributeName={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "text":
              return (
                <Text
                  attributeName={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "textColor":
              return (
                <TextColor
                  attributeName={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
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
