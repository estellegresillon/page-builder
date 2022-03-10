import { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { IItem } from 'types/component';

import ItemList from './ItemList';

export type RowProps = {
  Component: React.ComponentType;
  components: IItem[];
  handleClick: () => void;
  index: number;
  section: IItem;
  selectedComponent: IItem | null;
};

const Row = ({ index, section, ...props }: RowProps): JSX.Element => {
  const [isDragDisabled, setIsDragDisabled] = useState(false);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      const { cursor } = getComputedStyle(e.target as HTMLDivElement);
      setIsDragDisabled(cursor === 'row-resize');
    });
  }, []);

  return (
    <Draggable
      isDragDisabled={isDragDisabled}
      draggableId={section.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ItemList section={section} index={index} {...props} />
        </div>
      )}
    </Draggable>
  );
};

export default Row;
