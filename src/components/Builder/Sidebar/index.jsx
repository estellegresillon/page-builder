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
  background-color: #252628;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 20%);
  color: white;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  width: 250px;
  z-index: 1;
`;
