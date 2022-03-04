import styled from "styled-components";

import IconBack from "components/common/IconBack";
import Alignment from "components/Settings/Alignment";
import Columns from "components/Settings/Columns";
import Height from "components/Settings/Height";
import Text from "components/Settings/Text";
import Color from "components/Settings/Color";
import { useBuilderContext } from "contexts";

const Settings = ({ selectedComponent }) => {
  const { selectComponent } = useBuilderContext();
  const { attributes } = selectedComponent;

  const attributesList = Object.keys(selectedComponent.attributes);

  return (
    <SettingsWrapper id="settings">
      <div className="close-settings" onClick={() => selectComponent(null)}>
        <IconBack /> <div>Back to list</div>
      </div>
      <div className="settings-content">
        {attributesList.map((attributeName) => {
          switch (attributeName) {
            case "alignment":
              return (
                <Alignment
                  attributeKey={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "height":
              return (
                <Height
                  attributeKey={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "description":
            case "subtitle":
            case "title":
              return (
                <Text
                  attributeKey={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "bgColor":
            case "buttonColor":
            case "textColor":
              return (
                <Color
                  attributeKey={attributeName}
                  attributes={attributes}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case "columns":
              return (
                <Columns
                  attributeKey={attributeName}
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
    align-items: center;
    cursor: pointer;
    display: flex;
    margin: 20px;

    svg {
      height: 15px;
      margin-right: 10px;
      width: 15px;
    }
  }

  .settings-content {
    margin: 0 20px;
    width: calc(100% - 40px);

    .attribute-name {
      text-transform: capitalize;
    }
  }
`;
