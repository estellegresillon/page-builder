import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Actions from "./Actions";
import { useBuilderContext } from "contexts";

const Resize = ({ Children, $isSelected, item, onClick }) => {
  const {
    draggedComponent,
    selectedComponent,
    setDraggedComponent,
    updateAttributes,
  } = useBuilderContext();
  const [initialPos, setInitialPos] = useState(null);
  const [initialSize, setInitialSize] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [img, setImg] = useState(null);
  const ref = useRef(null);

  const isResizable = item.attributes.resizable;

  const initial = (e) => {
    e.dataTransfer.setDragImage(img, 0, 0);
    let resizable = ref?.current;

    setInitialPos(e.clientY);
    setInitialSize(resizable.offsetHeight);
  };

  const resize = (e) => {
    let resizable = ref?.current;

    resizable.style.height = `${
      parseInt(initialSize) + parseInt(e.clientY - initialPos)
    }px`;
  };

  const onDragEnd = () => {
    updateAttributes(item.id, {
      height: ref?.current.style.height.slice(0, -2),
    });
  };

  const handleDragOver = (e) => {
    if (!selectedComponent) {
      const selectedItem = e.target;
      setDraggedComponent(selectedItem.id);
    }
  };

  useEffect(() => {
    const dragImg = new Image(0, 0);
    dragImg.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    setImg(dragImg);
  }, []);

  return (
    <ResizeWrapper
      $isSelected={$isSelected}
      onClick={onClick}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={() => setDraggedComponent(null)}
      onDragLeave={() => setDraggedComponent(null)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {($isSelected || isHovered) && <Actions item={item} />}
      <Children resizeRef={ref} isInBuilder item={item} />
      {isResizable && ($isSelected || isHovered) && (
        <Handler
          draggable="true"
          onDragStart={initial}
          onDrag={resize}
          onDragEnd={onDragEnd}
        />
      )}
      {draggedComponent === item.id && <PlaceholderWrapper />}
    </ResizeWrapper>
  );
};

export default Resize;

const ResizeWrapper = styled.div`
  align-items: center;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: ${({ $isSelected }) => ($isSelected ? "1" : "0")};

  .drag-sort-active {
    margin-top: 1000px;
  }

  &:before {
    box-shadow: ${({ $isSelected }) =>
      $isSelected ? "inset 0px 0px 0px 3px #d40c0c" : "none"};
    content: "";
    display: block;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    &:before {
      box-shadow: inset 0px 0px 0px 3px #d40c0c;
    }
  }
`;

const Handler = styled.div`
  background-color: #d40c0c;
  bottom: -15px;
  cursor: row-resize;
  height: 16px;
  position: absolute;
  width: 16px;
`;

const PlaceholderWrapper = styled.div`
  background: #e8f4ff;
  border: 1px solid #5ed2ff;
  border-radius: 5px;
  height: 200px;
  margin: 5px;
  width: calc(100% - 12px);
`;
