import { useState } from 'react';
import styled from 'styled-components';

import Input from 'components/common/Input';
import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';

type TextProps = {
  attributeKey: string;
  item: IItem;
};

const Text = ({ attributeKey, item }: TextProps): JSX.Element => {
  const { updateAttributes } = useBuilderContext();
  const [textValue, setTextValue] = useState(item.attributes[attributeKey]);

  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          value={item.attributes[attributeKey] || textValue}
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
