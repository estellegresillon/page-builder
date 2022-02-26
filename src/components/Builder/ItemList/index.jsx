import Resize from "components/common/Resize";

const ItemList = ({
  Component,
  components,
  handleParentClick,
  handleSingleClick,
  section,
  selectedParentComponent,
  selectedSingleComponent,
}) => (
  <Resize
    $isSelected={section.id === selectedParentComponent?.id}
    item={section}
    onClick={(e) => handleParentClick(e, section)}
  >
    <Component
      $isSelected={section.id === selectedParentComponent?.id}
      item={section}
    >
      {section.children.map((single) => {
        const ChildrenComponent = components[single.componentName];

        return (
          <ChildrenComponent
            $isSelected={single.id === selectedSingleComponent?.id}
            item={single}
            key={single.id}
            onClick={(e) => handleSingleClick(e, single, section)}
          />
        );
      })}
    </Component>
  </Resize>
);

export default ItemList;
