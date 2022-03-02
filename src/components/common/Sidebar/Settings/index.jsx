import styled from "styled-components";

import IconBack from "components/common/IconBack";
import { useBuilderContext } from "contexts";

const Settings = ({ selectedComponent }) => {
  const { selectComponent } = useBuilderContext();

  console.log(selectedComponent);

  return (
    <SettingsWrapper>
      <div className="close-settings" onClick={() => selectComponent(null)}>
        <IconBack /> <div>Edit {selectedComponent?.componentName}</div>
      </div>
      <div className="settings-content">Settings</div>
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
`;
