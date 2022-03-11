import styled from 'styled-components';

import Divider from 'components/common/Divider';
import { getTextAlign } from 'utils/helpers';
import { ChildrenProps, IAttributes } from 'types/component';

const Section = ({
  isInBuilder = false,
  item,
  resizeRef,
}: ChildrenProps): JSX.Element => {
  const { attributes } = item;

  return (
    <SectionWrapper
      $attributes={attributes}
      $isInBuilder={isInBuilder}
      ref={resizeRef}
    >
      <SectionContent $attributes={attributes}>
        <h3>{attributes.title}</h3>
        <Divider color={attributes.textColor} />
        <p>{attributes.description}</p>
      </SectionContent>
      <img src="builder/10.jpg" alt="section" />
    </SectionWrapper>
  );
};

Section.componentName = 'Section';

export default Section;

const SectionWrapper = styled.div<{
  $attributes: IAttributes;
  $isInBuilder: boolean;
}>`
  align-items: center;
  display: flex;
  flex-direction: ${({ $attributes }) =>
    $attributes.reversed ? 'row-reverse' : 'row'};
  height: 80vh;
  margin: ${({ $attributes }) => ($attributes.hasSectionGap ? `5% 0` : '0')};
  pointer-events: ${({ $isInBuilder }) => ($isInBuilder ? 'none' : '')};
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: ${({ $attributes }) =>
      $attributes.reversed ? 'column-reverse' : 'column'};
    height: auto;

    img {
      height: 400px;
      width: 100% !important;
    }
  }

  body#force-mobile & {
    flex-wrap: nowrap;
    flex-direction: ${({ $attributes }) =>
      $attributes.reversed ? 'column-reverse' : 'column'};
    height: auto;

    img {
      height: 400px;
      width: 100% !important;
    }
  }
`;

const SectionContent = styled.div<{ $attributes: IAttributes }>`
  align-items: ${({ $attributes }) => $attributes.alignment?.alignItems};
  background: ${({ $attributes }) => $attributes.bgColor};
  color: ${({ $attributes }) => $attributes.textColor};
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: ${({ $attributes }) =>
    $attributes.alignment?.justifyContent};
  text-align: ${({ $attributes }) =>
    getTextAlign($attributes.alignment?.alignItems)};
  width: 80%;
  margin: 20% 10%;

  h3 {
    font-size: 36px;
    margin: 0;
    margin-bottom: 20px !important;
    width: 80%;
  }

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  body#force-mobile & {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;
