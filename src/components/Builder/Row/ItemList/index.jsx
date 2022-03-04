import Resize from "components/Builder/Resize";

const ItemList = ({ Component, handleClick, section, selectedComponent }) => (
  <Resize
    $isSelected={section.id === selectedComponent?.id}
    isInBuilder
    item={section}
    onClick={handleClick}
    Children={Component}
  ></Resize>
);

export default ItemList;
