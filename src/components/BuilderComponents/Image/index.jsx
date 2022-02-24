import styled from "styled-components";

const Image = ({ image = "", ...props }) => (
  <ImageWrapper {...props}>Image</ImageWrapper>
);

Image.componentName = "Image";
Image.componentType = "Single";

export default Image;

const ImageWrapper = styled.div`
  align-items: center;
  background-color: red;
  border: ${({ $isSelected }) =>
    $isSelected ? "2px violet solid" : "1px solid black"};
  display: flex;
  flex-direction: column;
  height: 100px;
  position: relative;
  width: 100%;
`;
