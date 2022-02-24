import styled from "styled-components";

const Text = ({ onClick, text = "Hello" }) => (
  <TextWrapper onClick={onClick}>{text}</TextWrapper>
);

Text.componentName = "Text";
Text.componentType = "Single";

export default Text;

const TextWrapper = styled.div`
  align-items: center;
  background-color: blue;
  display: flex;
  flex-direction: column;
  height: 100px;
  position: relative;
  width: 100%;
`;
