import { forwardRef } from "react";
import styled from "styled-components";

const Hero = forwardRef(({ children, item }, ref) => {
  const { attributes } = item;

  return (
    <HeroWrapper $attributes={attributes} ref={ref}>
      {children}
    </HeroWrapper>
  );
});

Hero.componentName = "Hero";
Hero.componentType = "Section";

export default Hero;

const HeroWrapper = styled.div`
  background: blue;
  display: flex;
  height: ${({ $attributes }) => $attributes.height || "200px"};
  width: 100%;
`;
