import styled from 'styled-components';

import IconBack from 'components/common/IconBack';
import Alignment from 'components/Settings/Alignment';
import Checkbox from 'components/Settings/Checkbox';
import Height from 'components/Settings/Height';
import SelectNumber from 'components/Settings/SelectNumber';
import Text from 'components/Settings/Text';
import Color from 'components/Settings/Color';
import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';

const Settings = ({ selectedComponent }: { selectedComponent: IItem }) => {
  const { selectComponent } = useBuilderContext();

  const attributesList = Object.keys(selectedComponent.attributes);

  return (
    <SettingsWrapper id="settings">
      <div className="close-settings" onClick={() => selectComponent(null)}>
        <IconBack /> <div>Back to list</div>
      </div>
      <h3>{selectedComponent.componentName}</h3>
      <div className="settings-content">
        {attributesList.map((attributeName) => {
          switch (attributeName) {
            case 'alignment':
              return (
                <Alignment
                  attributeKey={attributeName}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case 'height':
              return (
                <Height
                  attributeKey={attributeName}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case 'description':
            case 'subtitle':
            case 'title':
            case 'mail':
            case 'dribbble':
            case 'instagram':
            case 'linkedIn':
            case 'other':
              return (
                <Text
                  attributeKey={attributeName}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case 'bgColor':
            case 'buttonColor':
            case 'textColor':
              return (
                <Color
                  attributeKey={attributeName}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case 'itemCount':
            case 'columns':
              return (
                <SelectNumber
                  attributeKey={attributeName}
                  item={selectedComponent}
                  key={attributeName}
                />
              );
            case 'reversed':
            case 'hasColGap':
            case 'hasSectionGap':
              return (
                <Checkbox
                  attributeKey={attributeName}
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
  margin-bottom: 25px;
  margin-top: 10px;
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
