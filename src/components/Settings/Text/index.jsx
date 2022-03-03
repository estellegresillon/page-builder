import { useState } from "react";
import styled from "styled-components";

import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const Text = ({ attributeName, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [textValue, setTextValue] = useState(attributes.text);

  const updateText = (e) => {
    const newTextValue = e.target.value;
    setTextValue(newTextValue);
    updateAttributes(item.id, { text: newTextValue });
  };

  return (
    <TextWrapper>
      <span className="attribute-name">{attributeName} : </span>
      <span className="attribute-value">
        <Input
          key={attributeName}
          name={attributeName}
          onChange={updateText}
          placeholder="enter text"
          value={attributes.text || textValue}
        />
      </span>
    </TextWrapper>
  );
};

export default Text;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;
