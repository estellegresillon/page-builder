import { Droppable } from "react-beautiful-dnd";

import Item from "../Item";

const ItemList = ({
  Component,
  components,
  handleClick,
  section,
  selectedComponent,
}) => (
  <Droppable droppableId={section.id} type="SINGLE">
    {(provided, snpashot) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        <Component
          $isDragging={snpashot.isDragging}
          $isSelected={section.id === selectedComponent?.id}
          index={section.id}
          item={section}
          onClick={(e) => handleClick(e, section)}
        >
          {section.children.map((single, index) => {
            const Component = components[single.componentName];

            return (
              <Item
                Component={Component}
                handleClick={handleClick}
                index={index}
                key={single.id}
                single={single}
                selectedComponent={selectedComponent}
              />
            );
          })}
        </Component>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ItemList;
