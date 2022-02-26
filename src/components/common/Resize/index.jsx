import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useBuilderContext } from "contexts";

const Resize = ({ children, $isSelected, item, onClick }) => {
  const { updateAttributes } = useBuilderContext();
  const [initialPos, setInitialPos] = useState(null);
  const [initialSize, setInitialSize] = useState(null);
  const [img, setImg] = useState(null);
  const ref = useRef(null);

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
      height: ref?.current.style.height,
    });
  };

  useEffect(() => {
    const dragImg = new Image(0, 0);
    dragImg.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    setImg(dragImg);
  }, []);

  return (
    <ResizeWrapper $isSelected={$isSelected} onClick={onClick}>
      {React.cloneElement(children, { ref })}
      {$isSelected && (
        <BottomHandler
          draggable="true"
          onDragStart={initial}
          onDrag={resize}
          onDragEnd={onDragEnd}
        />
      )}
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

  &:before {
    box-shadow: ${({ $isSelected }) =>
      $isSelected ? "inset 0px 0px 0px 3px violet" : "none"};
    content: '';
    display: block;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }​
`;

const BottomHandler = styled.div`
  background-color: violet;
  bottom: -15px;
  cursor: row-resize;
  height: 16px;
  position: absolute;
  width: 16px;
`;
