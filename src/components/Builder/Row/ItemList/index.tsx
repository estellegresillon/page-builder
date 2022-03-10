import Resize from 'components/Builder/Resize';

import { RowProps } from '..';

const ItemList = ({
  Component,
  handleClick,
  section,
  selectedComponent,
}: RowProps): JSX.Element => (
  <Resize
    $isSelected={section.id === selectedComponent?.id}
    item={section}
    onClick={handleClick}
    Children={Component}
  ></Resize>
);

export default ItemList;
