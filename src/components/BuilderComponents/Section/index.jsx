import styled from "styled-components";

import Divider from "components/common/Divider";
import { getTextAlign } from "utils/helpers";

const Section = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <SectionWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      <SectionContent $attributes={attributes}>
        <h3>{attributes.title}</h3>
        <Divider color={attributes.textColor} />
        <p>{attributes.description}</p>
      </SectionContent>
      <img src="builder/42.jpeg" alt="section" />
    </SectionWrapper>
  );
};

Section.componentName = "Section";

export default Section;

const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ $attributes }) =>
    $attributes.reversed ? "row-reverse" : "row"};
  margin: ${({ $attributes }) => ($attributes.hasSectionGap ? `5% 0` : "0")};
  height: 80vh;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 50%;
  }
`;

const SectionContent = styled.div`
  align-items: ${({ $attributes }) => $attributes.alignment.alignItems};
  background: ${({ $attributes }) => $attributes.bgColor};
  color: ${({ $attributes }) => $attributes.textColor};
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: ${({ $attributes }) => $attributes.alignment.justifyContent};
  text-align: ${({ $attributes }) =>
    getTextAlign($attributes.alignment.alignItems)};
  width: 80%;
  margin: 10%;

  h3 {
    font-size: 36px;
    margin-bottom: 20px !important;
    width: 70%;
  }

  p {
    font-size: 20px;
  }
`;
