import { useState } from "react";
import styled from "styled-components";

import Select from "components/common/Select";
import { useBuilderContext } from "contexts";

const NAME = {
  columns: "columns",
  itemCount: "number of items",
};

const OPTIONS = (component) => ({
  columns: Array.from({ length: 4 }, (_, i) => (i + 1).toString()),
  itemCount: Array.from({ length: component === "Partners" ? 6 : 16 }, (_, i) =>
    (i + 1).toString()
  ),
});

const SelectNumber = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [value, setValue] = useState(attributes[attributeKey]);

  const updateValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateAttributes(item.id, { [attributeKey]: newValue });
  };

  return (
    <SelectNumberWrapper>
      <div className="attribute-name">{NAME[attributeKey]} : </div>
      <div className="attribute-value">
        <Select
          name={NAME[attributeKey]}
          onChange={updateValue}
          options={OPTIONS(item.componentName)[attributeKey]}
          placeholder="Select a number"
          value={value}
        />
      </div>
    </SelectNumberWrapper>
  );
};

export default SelectNumber;

const SelectNumberWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
  }
`;
