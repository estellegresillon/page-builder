import styled from "styled-components";

const Button = ({ onClick, text }) => (
  <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>
);

export default Button;

const ButtonWrapper = styled.div`
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 10px;
  padding: 10px 0;
  text-align: center;
  width: calc(100% - 20px);
  background-color: #365ed3;

  &:hover {
    background-color: #092578;
  }
`;
