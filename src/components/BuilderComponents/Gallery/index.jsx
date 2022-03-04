import styled from "styled-components";

import { getItemHeight, getItemWidth } from "utils/helpers";

const PICTURES = ["1", "2", "3", "4", "5"];

const Gallery = ({ item, resizeRef }) => {
  const { attributes } = item;

  return (
    <GalleryWrapper $attributes={attributes} id={item.id} ref={resizeRef}>
      {PICTURES.map((picture) => (
        <img key={picture} src={`builder/${picture}.jpg`} alt={picture} />
      ))}
    </GalleryWrapper>
  );
};

Gallery.componentName = "Gallery";

export default Gallery;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  img {
    height: ${({ $attributes }) => getItemHeight($attributes.columns)};
    object-fit: cover;
    width: ${({ $attributes }) => getItemWidth($attributes.columns)};
  }
`;
