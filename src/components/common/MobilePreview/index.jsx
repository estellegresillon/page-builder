import { useEffect } from "react";
import styled from "styled-components";

import Prod from "components/Prod";

const MobilePreview = ({ onClose }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("id", "force-mobile");

    return () => body.removeAttribute("id");
  }, []);

  return (
    <Overlay onClick={onClose}>
      <MobilePreviewWrapper id="mobile-wrapper">
        <Prod />
      </MobilePreviewWrapper>
    </Overlay>
  );
};

export default MobilePreview;

const Overlay = styled.div`
  background-color: black;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
`;

const MobilePreviewWrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  height: 600px;
  left: calc(50% - 160px);
  overflow: scroll;
  position: fixed;
  top: calc(50% - 300px);
  width: 320px;
  z-index: 3;

  svg {
    color: black;
  }
`;
