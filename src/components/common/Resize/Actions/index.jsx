import styled from "styled-components";

import IconRemove from "components/common/IconRemove";
import { useBuilderContext } from "contexts";

const Resize = ({ item }) => {
  const { removeComponent } = useBuilderContext();

  return (
    <ActionsWrapper>
      <div onClick={() => removeComponent(item)}>
        <IconRemove />
      </div>
    </ActionsWrapper>
  );
};

export default Resize;

const ActionsWrapper = styled.div`
  align-items: center;
  background-color: violet;
  cursor: pointer;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  padding: 7px 5px 3px 4px;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  z-index: 1000;

  svg {
    color: white;
    cursor: pointer;

    height: 15px;
    width: 15px;
  }
`;
