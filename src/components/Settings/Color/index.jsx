import { useRef, useState } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const Color = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const ref = useRef();
  const [isPickerOpen, setPickerOpen] = useState(false);
  useOnClickOutside(ref, () => setPickerOpen(false));

  const updateColor = (newColor) => {
    updateAttributes(item.id, { [attributeKey]: newColor.hex });
  };

  return (
    <ColorWrapper>
      <span className="attribute-name">
        {attributeKey === "textColor" ? "Text color" : "BG color"} :{" "}
      </span>
      <span className="attribute-value">
        <ColorButton
          $color={attributes[attributeKey]}
          onClick={() => setPickerOpen(true)}
        />
        {isPickerOpen && (
          <PickerWrapper ref={ref}>
            <ChromePicker
              color={attributes[attributeKey]}
              onChangeComplete={updateColor}
            />
          </PickerWrapper>
        )}
      </span>
    </ColorWrapper>
  );
};

export default Color;

const ColorWrapper = styled.div`
  margin-bottom: 20px;
`;

const ColorButton = styled.div`
  background-color: ${({ $color }) => $color};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  margin: 20px 0;
  position: relative;
  width: 40px;
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
