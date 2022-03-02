import Resize from "components/common/Resize";

const ItemList = ({ Component, handleClick, section, selectedComponent }) => (
  <Resize
    $isSelected={section.id === selectedComponent?.id}
    item={section}
    onClick={handleClick}
    Children={Component}
  ></Resize>
);

export default ItemList;
