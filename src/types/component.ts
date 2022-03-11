export interface IItem {
  attributes: IAttributes;
  componentName: string;
  id: string;
}

export type ChildrenProps = {
  isInBuilder: boolean;
  item: IItem;
  resizeRef: React.MutableRefObject<HTMLDivElement> | null;
};

export type ComponentProps = React.ComponentType<ChildrenProps> & {
  componentName: string;
};

export interface IAlignment {
  alignItems: string;
  justifyContent: string;
}

export interface IAttributes {
  alignment?: IAlignment;
  buttonColor?: string;
  bgColor?: string;
  colGap?: string;
  columns?: string;
  description?: string;
  dribbble?: string;
  instagram?: string;
  itemCount?: string;
  hasColGap?: boolean;
  hasSectionGap?: boolean;
  height?: string;
  linkedIn?: string;
  mail?: string;
  other?: string;
  resizable?: boolean;
  reversed?: boolean;
  subtitle?: string;
  textColor?: string;
  title?: string;
  [attributeKey: string]: string | boolean | IAlignment | undefined;
}

// export type IAttributes = {
//   [attributeKey: string]: string | boolean | IAlignment;
// };
