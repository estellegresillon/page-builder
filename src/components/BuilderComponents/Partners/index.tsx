import styled from 'styled-components';

import { ChildrenProps, IAttributes } from 'types/component';

const PARTNERS = Array.from({ length: 6 }, (_, i) => (i + 100).toString());

const Partners = ({
  isInBuilder = false,
  item,
  resizeRef,
}: ChildrenProps): JSX.Element | null => {
  const { attributes } = item;

  if (!attributes?.itemCount) return null;

  return (
    <PartnersWrapper
      $attributes={attributes}
      id={item.id}
      $isInBuilder={isInBuilder}
      ref={resizeRef}
    >
      {PARTNERS.slice(0, parseInt(attributes?.itemCount)).map((picture) => (
        <ImageWrapper key={picture} $attributes={attributes}>
          <img src={`builder/${picture}.png`} alt={picture} />
        </ImageWrapper>
      ))}
    </PartnersWrapper>
  );
};

Partners.componentName = 'Partners';

export default Partners;

const PartnersWrapper = styled.div<{
  $attributes: IAttributes;
  $isInBuilder: boolean;
}>`
  display: flex;
  min-height: ${({ $attributes }) => `${$attributes.height}px`};
  justify-content: space-evenly;
  opacity: 0.3;
  padding: 0 10%;
  pointer-events: ${({ $isInBuilder }) => ($isInBuilder ? 'none' : '')};
  width: 80%;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding: 10%;

    img {
      margin-top: 40px;
    }
  }

  body#force-mobile & {
    align-items: center;
    flex-direction: column;
    min-height: auto;
    padding: 10%;

    img {
      margin-top: 40px;
    }
  }
`;

const ImageWrapper = styled.div<{ $attributes: IAttributes }>`
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${({ $attributes }) => `calc(100% / ${$attributes.itemCount})`};

  img {
    height: 80px;
    object-fit: contain;
    width: 80px;
  }
`;
