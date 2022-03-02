import styled from "styled-components";

const Section = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <SectionWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      ho
    </SectionWrapper>
  );
};

Section.componentName = "Section";

export default Section;

const SectionWrapper = styled.div`
  align-items: center;
  background: red;
  display: flex;
  flex-wrap: wrap;
  min-height: ${({ $attributes }) => `${$attributes.height}px`};
  justify-content: space-evenly;
  width: 100%;
`;
