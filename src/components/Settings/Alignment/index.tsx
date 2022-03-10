import styled from 'styled-components';

import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';

const ALIGNMENTS = ['flex-start', 'center', 'flex-end'];

type AlignmentProps = {
  attributeKey: string;
  item: IItem;
};

const Alignment = ({
  attributeKey,
  item,
}: AlignmentProps): JSX.Element | null => {
  const { updateAttributes } = useBuilderContext();

  if (!item.attributes.alignment) return null;

  const { alignItems, justifyContent } = item.attributes.alignment;

  const updateAlignment = (align: string, justify: string) => {
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
                $isSelected={alignItems === a && justifyContent === j}
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

  .attribute-name {
    margin: 10px 0;
  }

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

const CircleWrapper = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#d40c0c' : 'lightgray'};
  border-radius: 50%;
  height: 10px;
  width: 10px;

  &:hover {
    background: ${({ $isSelected }) => ($isSelected ? '#920e0e' : 'gray')};
  }
`;
