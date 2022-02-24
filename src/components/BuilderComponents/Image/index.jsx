import styled from "styled-components";

const Image = ({ image = "", onClick }) => (
  <ImageWrapper onClick={onClick}>{image}</ImageWrapper>
);

Image.componentName = "Image";
Image.componentType = "Single";

export default Image;

const ImageWrapper = styled.div`
  align-items: center;
  background-color: red;
  display: flex;
  flex-direction: column;
  height: 200px;
  position: relative;
  width: 100%;
`;
