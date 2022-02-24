import { useCallback, useEffect } from "react";
import styled from "styled-components";

import { useBuilderContext } from "contexts";

const Builder = () => {
  const {
    components,
    json,
    removeComponent,
    selectComponent,
    selectedComponent,
  } = useBuilderContext();

  const handleClick = (e, item) => {
    e.stopPropagation();
    selectComponent(item);
  };

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;

      if (key === "Backspace") {
        removeComponent(selectedComponent);
      }
    },
    [removeComponent, selectedComponent]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <BuilderWrapper>
      {json?.length > 0 ? (
        json.map((section) => {
          const Component = components[section.componentName];
          console.log(section);

          return (
            <Component
              key={section.id}
              $isSelected={section.id === selectedComponent?.id}
              item={section}
              onClick={(e) => handleClick(e, section)}
            >
              {section.children.map((single) => {
                const Component = components[single.componentName];

                return (
                  <Component
                    key={single.id}
                    $isSelected={single.id === selectedComponent?.id}
                    item={single}
                    onClick={(e) => handleClick(e, single)}
                  />
                );
              })}
            </Component>
          );
        })
      ) : (
        <div>Add your first element.</div>
      )}
    </BuilderWrapper>
  );
};

export default Builder;

const BuilderWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
