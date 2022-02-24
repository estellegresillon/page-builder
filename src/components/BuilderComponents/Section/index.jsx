import styled from "styled-components";

const Section = ({ children, ...props }) => (
  <SectionWrapper {...props}>{children}</SectionWrapper>
);

Section.componentName = "Section";
Section.componentType = "Section";

export default Section;

const SectionWrapper = styled.div`
  align-items: center;
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? "inset 0px 0px 0px 3px violet"
      : "inset 0px 0px 0px 1px black"};
  display: flex;
  position: relative;
  height: 400px;
  width: 100%;
`;
