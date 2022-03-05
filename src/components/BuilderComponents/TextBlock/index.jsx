import styled from "styled-components";

import Divider from "components/common/Divider";
import { getTextAlign } from "utils/helpers";

const TextBlock = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <TextBlockWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      <TextBlockContent $attributes={attributes}>
        <h2>{attributes.title}</h2>
        <Divider color={attributes.textColor} />
        <p>{attributes.description}</p>
      </TextBlockContent>
    </TextBlockWrapper>
  );
};

TextBlock.componentName = "TextBlock";

export default TextBlock;

const TextBlockWrapper = styled.div`
  display: flex;
  min-height: ${({ $attributes }) => `${$attributes.height}px`};
  width: 100%;
`;

const TextBlockContent = styled.div`
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

  h2 {
    font-size: 48px;
    margin-bottom: 20px !important;
    width: 100%;
  }

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 10%;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;
