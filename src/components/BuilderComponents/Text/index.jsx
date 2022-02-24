import styled from "styled-components";

const Text = ({ text = "Hello", ...props }) => (
  <TextWrapper {...props}>{text}</TextWrapper>
);

Text.componentName = "Text";
Text.componentType = "Single";

export default Text;

const TextWrapper = styled.div`
  align-items: center;
  background-color: blue;
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? "inset 0px 0px 0px 3px violet"
      : "inset 0px 0px 0px 1px black"};
  display: flex;
  flex-direction: column;
  height: 100px;
  position: relative;
  width: 100%;
`;
