import styled from "styled-components";

const Button = ({ color, onClick, text }) => (
  <ButtonWrapper $color={color} onClick={onClick}>
    {text}
  </ButtonWrapper>
);

export default Button;

const ButtonWrapper = styled.div`
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  margin: 0 auto;
  margin-top: 19px;
  padding: 12px 0;
  text-align: center;
  width: 150px;
  background-color: ${({ $color }) => $color};

  &:hover {
    filter: brightness(85%);
  }
`;
