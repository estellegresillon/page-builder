import styled from "styled-components";

import { useBuilderContext } from "contexts";

const ALIGNMENTS = ["flex-start", "center", "flex-end"];

const Alignment = ({ attributeKey, attributes, item }) => {
  const { updateAttributes } = useBuilderContext();

  const handleIsSelected = (align, justify) => {
    const { alignItems, justifyContent } = attributes.alignment;
    return alignItems === align && justifyContent === justify;
  };

  const updateAlignment = (align, justify) => {
    updateAttributes(item.id, {
      [attributeKey]: { alignItems: align, justifyContent: justify },
    });
  };

  return (
    <AlignmentWrapper>
      <div className="attribute-name">{attributeKey} : </div>
      {ALIGNMENTS.map((j) => (
        <div key={j} className={`row ${j}`}>
          {ALIGNMENTS.map((a) => (
            <div
              key={a}
              onClick={() => updateAlignment(a, j)}
              className={`box ${a}`}
            >
              <CircleWrapper
                $isSelected={handleIsSelected(a, j)}
                className="circle"
              />
            </div>
          ))}
        </div>
      ))}
    </AlignmentWrapper>
  );
};

export default Alignment;

const AlignmentWrapper = styled.div`
  margin-bottom: 20px;

  .row {
    align-items: center;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 90px;

    .box {
      align-items: center;
      cursor: pointer;
      display: flex;
      height: 30px;
      justify-content: center;
      width: 30px;
    }
  }
`;

const CircleWrapper = styled.div`
  background-color: ${({ $isSelected }) => ($isSelected ? "red" : "lightgray")};
  border-radius: 50%;
  height: 10px;
  width: 10px;

  &:hover {
    background: ${({ $isSelected }) => ($isSelected ? "#920e0e" : "gray")};
  }
`;
