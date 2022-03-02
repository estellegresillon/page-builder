import styled from "styled-components";

const Hero = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <HeroWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      hi
    </HeroWrapper>
  );
};

Hero.componentName = "Hero";

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ $attributes }) => $attributes.height || "200px"};
  width: 100%;
`;
