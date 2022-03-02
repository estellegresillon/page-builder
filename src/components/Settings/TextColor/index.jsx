import { useState } from "react";
import styled from "styled-components";

import Button from "components/common/Button";
import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const TextColor = ({ attribute, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [textColorValue, setTextColorValue] = useState(attributes.textColor);

  const updateTextColor = (newTextColorValue) => {
    updateAttributes(item.id, { textColor: newTextColorValue });
  };

  return (
    <TextColorWrapper>
      <span className="attribute-name">{attribute} : </span>
      <span className="attribute-value">
        <Input
          name={attribute}
          onChange={(e) => setTextColorValue(e.target.value)}
          placeholder="enter color"
          value={textColorValue}
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
