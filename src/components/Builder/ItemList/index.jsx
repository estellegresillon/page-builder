import Resize from "components/common/Resize";

const ItemList = ({
  Component,
  components,
  handleClick,
  section,
  selectedComponent,
}) => (
  <Resize
    $isSelected={section.id === selectedComponent?.id}
    item={section}
    onClick={(e) => handleClick(e, section)}
  >
    <Component
      $isSelected={section.id === selectedComponent?.id}
      item={section}
    >
      {section.children.map((single) => {
        const ChildrenComponent = components[single.componentName];

        return (
          <ChildrenComponent
            $isSelected={single.id === selectedComponent?.id}
            item={single}
            key={single.id}
            onClick={(e) => handleClick(e, single)}
          />
        );
      })}
    </Component>
  </Resize>
);

export default ItemList;
