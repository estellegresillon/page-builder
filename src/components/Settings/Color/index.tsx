import { useRef, useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import styled from 'styled-components';

import { useBuilderContext } from 'contexts';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { IItem } from 'types/component';

const NAME: { [key: string]: string } = {
  bgColor: 'BG color',
  buttonColor: 'Button color',
  textColor: 'Text color',
};

type ColorProps = {
  attributeKey: string;
  item: IItem;
};

const Color = ({ attributeKey, item }: ColorProps): JSX.Element => {
  const { updateAttributes } = useBuilderContext();
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isPickerOpen, setPickerOpen] = useState(false);
  useOnClickOutside(ref, () => setPickerOpen(false));

  const updateColor = (newColor: ColorResult) => {
    updateAttributes(item.id, { [attributeKey]: newColor.hex });
  };

  return (
    <ColorWrapper>
      <div className="attribute-name">{NAME[attributeKey]} :</div>
      <div className="attribute-value">
        <ColorButton
          $color={item.attributes[attributeKey] as string}
          onClick={() => setPickerOpen(true)}
        />
        {isPickerOpen && (
          <PickerWrapper ref={ref}>
            <ChromePicker
              color={item.attributes[attributeKey] as string}
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

const ColorButton = styled.div<{ $color: string }>`
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
