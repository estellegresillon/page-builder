import styled from "styled-components";

const Hero = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <HeroWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      {attributes.text}
    </HeroWrapper>
  );
};

Hero.componentName = "Hero";

export default Hero;

const HeroWrapper = styled.div`
  align-items: center;
  background-image: ${({ $attributes }) =>
    `url(${$attributes.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ $attributes }) => $attributes.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ $attributes }) => `${$attributes.height}px`};
  width: 100%;
`;
