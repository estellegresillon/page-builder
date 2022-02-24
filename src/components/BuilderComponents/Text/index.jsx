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
  border: ${({ $isSelected }) =>
    $isSelected ? "2px violet solid" : "1px solid black"};
  display: flex;
  flex-direction: column;
  height: 100px;
  position: relative;
  width: 100%;
`;
