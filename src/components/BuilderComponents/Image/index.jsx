import styled from "styled-components";

const Image = ({ item, ...props }) => (
  <ImageWrapper {...props}>{item.id}</ImageWrapper>
);

Image.componentName = "Image";
Image.componentType = "Single";

export default Image;

const ImageWrapper = styled.div`
  // align-items: center;
  background-color: red;
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? "inset 0px 0px 0px 3px violet"
      : "inset 0px 0px 0px 1px black"};
  /* display: flex;
  flex-direction: column; */
  height: 100px;
  //position: relative;
  width: 100px;
`;
