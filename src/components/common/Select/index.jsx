import styled from "styled-components";

const Select = ({ name, onChange, options, placeholder, value }) => (
  <SelectWrapper>
    <select onChange={onChange} name={name} id={name} value={value}>
      <option value="">{placeholder}</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </SelectWrapper>
);

export default Select;

const SelectWrapper = styled.div`
  margin-left: 10px;
  width: 100%;

  select {
    background-color: #252628;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
    cursor: pointer;
    color: #ffffff;
    font-family: Gilroy;
    height: 38px;
    margin-bottom: 10px;
    outline: 0;
    padding-left: 15px;
    width: calc(100% - 23px);

    &::placeholder {
      color: lightgray;
      opacity: 0.5;
    }
  }

  select::-ms-expand {
    position: absolute;
  }
`;
