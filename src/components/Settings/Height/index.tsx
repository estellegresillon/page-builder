import React, { useState } from 'react';
import styled from 'styled-components';

import Input from 'components/common/Input';
import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';

type HeightProps = {
  attributeKey: string;
  item: IItem;
};

const Height = ({ attributeKey, item }: HeightProps): JSX.Element => {
  const { updateAttributes } = useBuilderContext();
  const [heightValue, setHeightValue] = useState(item.attributes.height);

  const updateHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeightValue = e.target.value;
    setHeightValue(newHeightValue);
    updateAttributes(item.id, { height: newHeightValue });
  };

  return (
    <HeightWrapper>
      <div className="attribute-name">{attributeKey} : </div>
      <div className="attribute-value">
        <Input
          key={attributeKey}
          name={attributeKey}
          onChange={updateHeight}
          placeholder="300"
          value={item.attributes.height || heightValue || '300'}
        />
      </div>
    </HeightWrapper>
  );
};

export default Height;

const HeightWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
  }
`;
