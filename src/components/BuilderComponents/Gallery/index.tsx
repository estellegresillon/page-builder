import styled from 'styled-components';

import { getItemHeight, getItemWidth } from 'utils/helpers';
import { ChildrenProps, IAttributes } from 'types/component';

const PICTURES = Array.from({ length: 16 }, (_, i) => (i + 1).toString());

const Gallery = ({
  isInBuilder = false,
  item,
  resizeRef,
}: ChildrenProps): JSX.Element | null => {
  const { attributes } = item;

  if (!attributes?.itemCount) return null;

  return (
    <GalleryWrapper
      $attributes={attributes}
      id={item.id}
      $isInBuilder={isInBuilder}
      ref={resizeRef}
    >
      {PICTURES.slice(0, parseInt(attributes?.itemCount)).map((picture) => (
        <img
          className={`img-${attributes.columns}-col`}
          key={picture}
          src={`builder/${picture}.jpg`}
          alt={picture}
        />
      ))}
    </GalleryWrapper>
  );
};

Gallery.componentName = 'Gallery';

export default Gallery;

const GalleryWrapper = styled.div<{
  $attributes: IAttributes;
  $isInBuilder: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: ${({ $attributes }) =>
    $attributes.hasSectionGap ? `${$attributes.colGap}% 0` : '0'};
  pointer-events: ${({ $isInBuilder }) => ($isInBuilder ? 'none' : '')};
  width: 100%;

  img {
    &.img-1-col {
      height: ${({ $attributes }) => getItemHeight($attributes.columns)};
      margin: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `${$attributes.colGap ? parseInt($attributes.colGap) / 2 : 5}% ${
              $attributes.colGap
            }%`
          : '0'};
      object-fit: cover;
      width: ${({ $attributes }) => getItemWidth($attributes.columns)};
    }

    &.img-2-col {
      height: ${({ $attributes }) => getItemHeight($attributes.columns)};
      margin: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `${$attributes.colGap ? parseInt($attributes.colGap) / 2 : 5}% ${
              $attributes.colGap
            }%`
          : '0'};
      object-fit: cover;
      width: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `calc(${getItemWidth($attributes.columns)} - 1.5 * ${
              $attributes.colGap
            }%)`
          : getItemWidth($attributes.columns)};

      &:nth-child(1n) {
        margin-right: 0%;
      }
    }

    &.img-3-col {
      height: ${({ $attributes }) => getItemHeight($attributes.columns)};
      margin: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `${$attributes.colGap ? parseInt($attributes.colGap) / 2 : 5}% ${
              $attributes.colGap
            }%`
          : '0'};
      object-fit: cover;
      width: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `calc(${getItemWidth($attributes.columns)} - 1.333334 * ${
              $attributes.colGap
            }%)`
          : getItemWidth($attributes.columns)};

      &:nth-child(1n),
      &:nth-child(2n) {
        margin-right: 0%;
      }
    }

    &.img-4-col {
      height: ${({ $attributes }) => getItemHeight($attributes.columns)};
      margin: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `${$attributes.colGap ? parseInt($attributes.colGap) / 2 : 5}% ${
              $attributes.colGap
            }%`
          : '0'};
      object-fit: cover;
      width: ${({ $attributes }) =>
        $attributes.hasColGap
          ? `calc(${getItemWidth($attributes.columns)} - 1.25 * ${
              $attributes.colGap
            }%)`
          : getItemWidth($attributes.columns)};

      &:nth-child(1n),
      &:nth-child(2n),
      &:nth-child(3n) {
        margin-right: 0%;
      }
    }
  }

  body#force-mobile & {
    flex-wrap: nowrap;
    flex-direction: column;

    img {
      height: 50vh !important;
      width: ${({ $attributes }) =>
        $attributes.hasColGap ? '90%' : '100%'} !important;
    }
  }

  @media screen and (max-width: 768px), {
    flex-wrap: nowrap;
    flex-direction: column;

    img {
      height: 50vh !important;
      width: ${({ $attributes }) =>
        $attributes.hasColGap ? '90%' : '100%'} !important;
    }
  }
`;
