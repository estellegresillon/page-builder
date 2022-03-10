export interface IItem {
  attributes: IAttributes;
  componentName: string;
  id: string;
}

export interface IAttributes {
  alignment?: { alignItems: string; justifyContent: string };
  buttonColor?: string;
  bgColor?: string;
  colGap?: string;
  columns?: string;
  description?: string;
  itemCount?: string;
  hasColGap?: boolean;
  hasSectionGap?: boolean;
  height?: string;
  resizable?: boolean;
  reversed?: boolean;
  subtitle?: string;
  textColor?: string;
  title?: string;
  mail?: string;
  linkedIn: string;
  instagram: string;
  dribbble: string;
  other: string;
  [key: string]: any;
}
