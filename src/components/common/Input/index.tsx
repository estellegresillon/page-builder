import styled from 'styled-components';

type InputProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

const Input = ({
  name,
  onChange,
  placeholder,
  value,
}: InputProps): JSX.Element => (
  <InputWrapper>
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type="text"
    />
  </InputWrapper>
);

export default Input;

const InputWrapper = styled.div`
  width: 100%;

  input {
    background-color: #252628;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
    color: #ffffff;
    font-family: Gilroy;
    height: 35px;
    outline: 0;
    padding-left: 14px;
    width: calc(100% - 37px);

    &::placeholder {
      color: lightgray;
      opacity: 0.5;
    }
  }
`;
