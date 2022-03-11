import styled from 'styled-components';

import Button from 'components/common/Button';
import { getTextAlign } from 'utils/helpers';
import { ChildrenProps, IAttributes } from 'types/component';

const Hero = ({
  isInBuilder = false,
  item,
  resizeRef,
}: ChildrenProps): JSX.Element => {
  const { attributes } = item;

  return (
    <HeroWrapper
      $attributes={attributes}
      $isInBuilder={isInBuilder}
      ref={resizeRef}
    >
      <div className="content" style={{ margin: '10%' }}>
        <h1>{attributes.title}</h1>
        <p>{attributes.subtitle}</p>
        <Button color={attributes.buttonColor} text="Discover" />
      </div>
    </HeroWrapper>
  );
};

Hero.componentName = 'Hero';

export default Hero;

const HeroWrapper = styled.div<{
  $attributes: IAttributes;
  $isInBuilder: boolean;
}>`
  align-items: ${({ $attributes }) => $attributes.alignment?.alignItems};
  background-image: url(builder/22.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ $attributes }) => $attributes.textColor};
  display: flex;
  flex-direction: column;
  height: ${({ $isInBuilder }) =>
    $isInBuilder ? 'calc(100vh - 70px)' : '100vh'};
  justify-content: ${({ $attributes }) =>
    $attributes.alignment?.justifyContent};
  pointer-events: ${({ $isInBuilder }) => ($isInBuilder ? 'none' : '')};
  text-align: ${({ $attributes }) =>
    getTextAlign($attributes.alignment?.alignItems)};
  width: 100%;

  h1 {
    font-size: 72px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 42px;
    }

    p {
      font-size: 16px;
    }
  }

  body#force-mobile & {
    h1 {
      font-size: 42px;
    }

    p {
      font-size: 16px;
    }

    .content {
      align-items: center;
      height: 536px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
