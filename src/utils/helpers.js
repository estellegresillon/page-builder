import { cloneDeep } from "lodash";
import { v4 as uuid } from "uuid";

export const traverseItem = (item, updater) => {
  const traverse = (item) => {
    updater(item);

    if (item.children) {
      item.children = item.children.filter(Boolean).map(traverse);
    }

    return item;
  };

  return traverse(item);
};

export const createNewItem = (item) =>
  traverseItem(cloneDeep(item), (item) => (item.id = uuid()));
