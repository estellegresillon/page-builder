import styled from "styled-components";

const Section = ({ children, ...props }) => (
  <SectionWrapper {...props}>{children}</SectionWrapper>
);

Section.componentName = "Section";
Section.componentType = "Section";

export default Section;

const SectionWrapper = styled.div`
  align-items: center;
  border: ${({ $isSelected }) =>
    $isSelected ? "2px violet solid" : "1px solid black"};
  display: flex;
  flex-direction: column:
  position: relative;
  height: 400px;
  width: 100%;
`;
