import styled from "styled-components";

const Hero = ({ children, onClick }) => (
  <HeroWrapper onClick={onClick}>hero children : {children}</HeroWrapper>
);

Hero.componentName = "Hero";
Hero.componentType = "Section";

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
