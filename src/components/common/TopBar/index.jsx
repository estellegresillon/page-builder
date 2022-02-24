import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { saveDocumentInLocalStorage } from "utils/localStorage";

import Menu from "../Menu";

const TopBar = () => {
  const [menu, toggleMenu] = useState(false);
  const { resetJson, json } = useBuilderContext();

  const handleSaveDocument = () => {
    saveDocumentInLocalStorage(json);
  };

  return (
    <TopBarWrapper>
      <div onClick={() => toggleMenu(!menu)}>Menu</div>
      {menu && <Menu onClose={() => toggleMenu(false)} />}
      <div onClick={() => handleSaveDocument()}>Save</div>
      <div onClick={() => resetJson()}>Clean</div>
      <div>
        <Link to="/">Builder</Link>
      </div>
      <div>
        <Link to="/prod">Prod</Link>
      </div>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  width: 100px;

  div {
    margin: 20px;
    text-align: center;
  }
`;
