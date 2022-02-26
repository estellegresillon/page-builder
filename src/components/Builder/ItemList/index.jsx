import { Droppable } from "react-beautiful-dnd";

import Resize from "components/common/Resize";

import Item from "../Item";

const ItemList = ({
  Component,
  components,
  handleClick,
  section,
  selectedComponent,
}) => (
  <Droppable droppableId={section.id} type="SINGLE" direction="horizontal">
    {(provided, snpashot) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        <Resize
          $isSelected={section.id === selectedComponent?.id}
          item={section}
          onClick={(e) => handleClick(e, section)}
        >
          <Component
            $isDragging={snpashot.isDragging}
            $isSelected={section.id === selectedComponent?.id}
            item={section}
          >
            {section.children.map((single, index) => {
              const ChildrenComponent = components[single.componentName];

              return (
                <Item
                  Component={ChildrenComponent}
                  handleClick={handleClick}
                  index={index}
                  key={single.id}
                  single={single}
                  selectedComponent={selectedComponent}
                />
              );
            })}
          </Component>
        </Resize>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ItemList;
