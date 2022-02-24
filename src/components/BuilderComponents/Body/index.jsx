import styled from "styled-components";

const Body = ({ children, onClick }) => (
  <BodyWrapper onClick={onClick}>{children}</BodyWrapper>
);

Body.componentName = "Body";
Body.componentType = "Root";

export default Body;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
