import { forwardRef } from "react";
import styled from "styled-components";

const Section = forwardRef(({ children, item }, ref) => {
  const { attributes } = item;

  return (
    <SectionWrapper $attributes={attributes} ref={ref}>
      {children}
    </SectionWrapper>
  );
});

Section.componentName = "Section";
Section.componentType = "Section";

export default Section;

const SectionWrapper = styled.div`
  align-items: center;
  background: red;
  height: ${({ $attributes }) => $attributes.height || "300px"};
  display: flex;
  width: 100%;
`;
