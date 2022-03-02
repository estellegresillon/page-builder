import Resize from "components/common/Resize";

const ItemList = ({ Component, handleClick, section, selectedComponent }) => (
  <Resize
    $isSelected={section.id === selectedComponent?.id}
    item={section}
    onClick={handleClick}
  >
    <Component
      $isSelected={section.id === selectedComponent?.id}
      item={section}
    />
  </Resize>
);

export default ItemList;
