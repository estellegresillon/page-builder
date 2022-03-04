import { useState } from "react";
import styled from "styled-components";

import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const Text = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [textValue, setTextValue] = useState(attributes[attributeKey]);

  const updateText = (e) => {
    const newTextValue = e.target.value;
    setTextValue(newTextValue);
    updateAttributes(item.id, { [attributeKey]: newTextValue });
  };

  return (
    <TextWrapper>
      <div className="attribute-name">{attributeKey} : </div>
      <div className="attribute-value">
        <Input
          key={attributeKey}
          name={attributeKey}
          onChange={updateText}
          placeholder={`Enter a ${attributeKey}`}
          value={attributes[attributeKey] || textValue}
        />
      </div>
    </TextWrapper>
  );
};

export default Text;

const TextWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
  }
`;
