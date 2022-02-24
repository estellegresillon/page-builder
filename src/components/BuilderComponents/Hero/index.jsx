import styled from "styled-components";

const Hero = ({ children, ...props }) => (
  <HeroWrapper {...props}>{children}</HeroWrapper>
);

Hero.componentName = "Hero";
Hero.componentType = "Section";

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  background-color: pink;
  border: ${({ $isSelected }) =>
    $isSelected ? "2px violet solid" : "1px solid black"};
  display: flex;
  flex-direction: column:
  position: relative;
  height: 300px;
  width: 100%;
`;
