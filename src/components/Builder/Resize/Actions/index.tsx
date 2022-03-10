import styled from 'styled-components';

import IconRemove from 'components/common/IconRemove';
import IconSettings from 'components/common/IconSettings';
import { useBuilderContext } from 'contexts';
import { IItem } from 'types/component';

const Resize = ({ item }: { item: IItem }): JSX.Element => {
  const { removeComponent, selectComponent } = useBuilderContext();

  const handleSelect = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: IItem,
  ) => {
    e.stopPropagation();
    selectComponent(item);
  };

  return (
    <ActionsWrapper>
      <div className="action-item" onClick={() => removeComponent(item)}>
        <IconRemove />
      </div>
      <div className="action-item" onClick={(e) => handleSelect(e, item)}>
        <IconSettings />
      </div>
    </ActionsWrapper>
  );
};

export default Resize;

const ActionsWrapper = styled.div`
  align-items: center;
  background-color: #d40c0c;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  padding-top: 14px;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  z-index: 1000;

  .action-item {
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  svg {
    color: white;
    cursor: pointer;

    height: 17px;
    width: 17px;
  }
`;
