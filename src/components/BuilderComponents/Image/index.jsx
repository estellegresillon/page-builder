import styled from "styled-components";

const Image = ({ item, ...props }) => (
  <ImageWrapper {...props}>{item.id}</ImageWrapper>
);

Image.componentName = "Image";
Image.componentType = "Single";

export default Image;

const ImageWrapper = styled.div`
  background-color: red;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? "inset 0px 0px 0px 3px violet" : "none"};
  height: 50%;
  width: 50%;
`;
