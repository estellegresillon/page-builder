import styled from "styled-components";

import { useBuilderContext } from "contexts";

const NAME = {
  hasColGap: "Column gap",
  hasSectionGap: "Section gap",
  reversed: "Reversed layout",
};

const Checkbox = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();

  const updateValue = (e) => {
    const newValue = !attributes[attributeKey];
    updateAttributes(item.id, { [attributeKey]: newValue });
  };

  return (
    <CheckboxWrapper>
      <div className="attribute-value">
        <label htmlFor={NAME[attributeKey]} name={NAME[attributeKey]}>
          {NAME[attributeKey]}
        </label>
        <input
          id={NAME[attributeKey]}
          onChange={updateValue}
          type="checkbox"
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
