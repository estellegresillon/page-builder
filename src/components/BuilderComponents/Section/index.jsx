import styled from "styled-components";

import Divider from "components/common/Divider";
import { getTextAlign } from "utils/helpers";

const Section = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <SectionWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      <SectionContent $attributes={attributes}>
        <h1>{attributes.title}</h1>
        <Divider color={attributes.textColor} />
        <p>{attributes.description}</p>
      </SectionContent>
    </SectionWrapper>
  );
};

Section.componentName = "Section";

export default Section;

const SectionWrapper = styled.div`
  display: flex;
  min-height: ${({ $attributes }) => `${$attributes.height}px`};
  width: 100%;

  h1 {
    font-size: 52px;
    margin-bottom: 20px !important;
    width: 70%;
  }

  p {
    font-size: 20px;
  }
`;

const SectionContent = styled.div`
  align-items: ${({ $attributes }) => $attributes.alignment.alignItems};
  background: ${({ $attributes }) => $attributes.bgColor};
  color: ${({ $attributes }) => $attributes.textColor};
  display: flex;
  flex-direction: column;
  justify-content: ${({ $attributes }) => $attributes.alignment.justifyContent};
  text-align: ${({ $attributes }) =>
    getTextAlign($attributes.alignment.alignItems)};
  width: 80%;
  margin: 5% 10%;

  h1 {
    font-size: 52px;
    margin-bottom: 20px !important;
    width: 70%;
  }

  p {
    font-size: 20px;
  }
`;
