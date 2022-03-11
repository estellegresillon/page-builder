import { cloneDeep } from 'lodash';
import { v4 as uuid } from 'uuid';

import { IItem } from 'types/component';

export const traverseItem = (item: IItem, updater: (item: IItem) => void) => {
  const traverse = (item: IItem) => {
    updater(item);
    return item;
  };

  return traverse(item);
};

export const createNewItem = (item: IItem) =>
  traverseItem(cloneDeep(item), (item: IItem) => (item.id = uuid()));

export const getTextAlign = (alignment?: string) => {
  if (!alignment) return;

  if (alignment === 'flex-start') {
    return 'left';
  }

  if (alignment === 'flex-end') {
    return 'right';
  }

  return 'center';
};

export const getItemHeight = (columnCount?: string) => {
  if (!columnCount) return;

  switch (columnCount) {
    case '1':
    case '2':
    case '3':
    default:
      return '50vh';
    case '4':
      return '30vh';
    case '5':
      return '20vh';
  }
};

export const getItemWidth = (columnCount?: string) => {
  if (!columnCount) return;

  switch (columnCount) {
    case '1':
    default:
      return '100%';
    case '2':
      return '50%';
    case '3':
      return '33.333334%';
    case '4':
      return '25%';
    case '5':
      return '20%';
  }
};
