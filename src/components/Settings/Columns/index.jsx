import { useState } from "react";
import styled from "styled-components";

import Select from "components/common/Select";
import { useBuilderContext } from "contexts";

const Columns = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [columnsValue, setColumnsValue] = useState(attributes.columns);

  const updateColumns = (e) => {
    console.log(e.target.value, attributes.columns);
    const newColumnsValue = e.target.value;
    setColumnsValue(newColumnsValue);
    updateAttributes(item.id, { columns: newColumnsValue });
  };

  return (
    <ColumnsWrapper>
      <div className="attribute-name">{attributeKey} : </div>
      <div className="attribute-value">
        <Select
          name="columns"
          onChange={updateColumns}
          options={[1, 2, 3, 4, 5]}
          placeholder="Select a number of columns"
          value={columnsValue}
        />
      </div>
    </ColumnsWrapper>
  );
};

export default Columns;

const ColumnsWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
  }
`;
