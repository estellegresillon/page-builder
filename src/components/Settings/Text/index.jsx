import { useState } from "react";
import styled from "styled-components";

import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const Text = ({ attribute, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [textValue, setTextValue] = useState(attributes.text);

  const updateText = (e) => {
    const newTextValue = e.target.value;
    setTextValue(newTextValue);
    updateAttributes(item.id, { text: newTextValue });
  };

  return (
    <TextWrapper>
      <span className="attribute-name">{attribute} : </span>
      <span className="attribute-value">
        <Input
          name={attribute}
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
