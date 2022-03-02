import styled from "styled-components";

import { useBuilderContext } from "contexts";
import ComponentList from "./ComponentList";
import Settings from "./Settings";

const Sidebar = () => {
  const { selectedComponent } = useBuilderContext();

  return (
    <SidebarWrapper>
      {selectedComponent ? (
        <Settings selectedComponent={selectedComponent} />
      ) : (
        <ComponentList />
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  background-color: white;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  width: 300px;
  z-index: 1;
`;
