import styled from "styled-components";

const Hero = ({ children, index, ...props }) => (
  <HeroWrapper {...props}>{children}</HeroWrapper>
);

Hero.componentName = "Hero";
Hero.componentType = "Section";

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  background-color: pink;
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? "inset 0px 0px 0px 3px violet"
      : "inset 0px 0px 0px 1px black"};
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 100%;
`;
