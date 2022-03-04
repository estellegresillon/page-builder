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

export const getTextAlign = (alignment) => {
  if (alignment === "flex-start") {
    return "left";
  }

  if (alignment === "flex-end") {
    return "right";
  }

  return "center";
};

export const getItemHeight = (columnCount) => {
  switch (columnCount) {
    case "1":
    case "2":
    case "3":
    default:
      return "50vh";
    case "4":
      return "30vh";
    case "5":
      return "20vh";
  }
};

export const getItemWidth = (columnCount) => {
  switch (columnCount) {
    case "1":
    default:
      return "100%";
    case "2":
      return "50%";
    case "3":
      return "33.333334%";
    case "4":
      return "25%";
    case "5":
      return "20%";
  }
};
