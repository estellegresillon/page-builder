import styled from "styled-components";

const Section = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <SectionWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      <h1>{attributes.title}</h1>
      <p>{attributes.description}</p>
    </SectionWrapper>
  );
};

Section.componentName = "Section";

export default Section;

const SectionWrapper = styled.div`
  align-items: ${({ $attributes }) => $attributes.alignment.alignItems};
  background: ${({ $attributes }) => $attributes.bgColor};
  color: ${({ $attributes }) => $attributes.textColor};
  display: flex;
  flex-direction: column;
  height: ${({ $attributes }) => `${$attributes.height}px`};
  justify-content: ${({ $attributes }) => $attributes.alignment.justifyContent};
  width: 100%;
`;
