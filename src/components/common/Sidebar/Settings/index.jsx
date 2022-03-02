import styled from "styled-components";

import { useBuilderContext } from "contexts";

const Settings = ({ selectedComponent }) => {
  const { selectComponent } = useBuilderContext();

  return (
    <SettingsWrapper>
      <div onClick={() => selectComponent(null)}>close</div>
      <div>{selectedComponent?.componentName || "hi"}</div>
    </SettingsWrapper>
  );
};

export default Settings;

const SettingsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
