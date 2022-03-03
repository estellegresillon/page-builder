import { useState } from "react";
import styled from "styled-components";

import Button from "components/common/Button";
import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const TextColor = ({ attributeName, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [textColorValue, setTextColorValue] = useState(attributes.textColor);

  const updateTextColor = (newTextColorValue) => {
    updateAttributes(item.id, { textColor: newTextColorValue });
  };

  return (
    <TextColorWrapper>
      <span className="attribute-name">{attributeName} : </span>
      <span className="attribute-value">
        <Input
          key={attributeName}
          name={attributeName}
          onChange={(e) => setTextColorValue(e.target.value)}
          placeholder="enter color"
          value={attributes.textColor || textColorValue}
        />
        <Button onClick={() => updateTextColor(textColorValue)} text="Change" />
      </span>
    </TextColorWrapper>
  );
};

export default TextColor;

const TextColorWrapper = styled.div`
  margin-bottom: 20px;
`;
