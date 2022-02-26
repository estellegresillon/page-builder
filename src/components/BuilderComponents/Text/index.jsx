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
    $isSelected ? "inset 0px 0px 0px 3px violet" : "none"};
  height: 150px;
  text-align: center;
  width: 200px;
`;
