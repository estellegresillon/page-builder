import { useRef, useState } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const NAME = {
  bgColor: "BG color",
  buttonColor: "Button color",
  textColor: "Text color",
};

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
      <div className="attribute-name">{NAME[attributeKey]} :</div>
      <div className="attribute-value">
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
      </div>
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
  margin: 10px 0;
  position: relative;
  width: 40px;
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;
