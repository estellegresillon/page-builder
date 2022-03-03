import { useState } from "react";
import styled from "styled-components";

import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const Height = ({ attributeName, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [heightValue, setHeightValue] = useState(attributes.height);

  const updateHeight = (e) => {
    const newHeightValue = e.target.value;
    setHeightValue(newHeightValue);
    updateAttributes(item.id, { height: newHeightValue });
  };

  return (
    <HeightWrapper>
      <span className="attribute-name">{attributeName} : </span>
      <span className="attribute-value">
        <Input
          key={attributeName}
          name={attributeName}
          onChange={updateHeight}
          placeholder="300"
          value={attributes.height || heightValue}
        />
      </span>
    </HeightWrapper>
  );
};

export default Height;

const HeightWrapper = styled.div`
  margin-bottom: 20px;
`;
