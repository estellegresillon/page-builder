import styled from "styled-components";

import { useBuilderContext } from "contexts";

const Checkbox = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();

  const updateValue = (e) => {
    const newValue = !attributes[attributeKey];
    updateAttributes(item.id, { [attributeKey]: newValue });
  };

  return (
    <CheckboxWrapper>
      <div className="attribute-value">
        <label htmlFor={attributeKey} name={attributeKey}>
          {attributeKey}
        </label>
        <input
          id={attributeKey}
          onClick={updateValue}
          type="radio"
          checked={attributes[attributeKey]}
        />
      </div>
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
  }

  .attribute-value {
    align-items: center;
    display: flex;

    label {
      margin-right: 10px;
      text-transform: capitalize;
    }

    input {
      cursor: pointer;
    }
  }
`;
