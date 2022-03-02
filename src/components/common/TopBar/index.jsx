import { Link } from "react-router-dom";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { saveDocumentInLocalStorage } from "utils/localStorage";

const TopBar = () => {
  const { resetJson, json } = useBuilderContext();

  const handleSaveDocument = () => {
    saveDocumentInLocalStorage(json);
  };

  return (
    <TopBarWrapper>
      <div onClick={() => handleSaveDocument()}>Save</div>
      <div>
        <Link to="/">Builder</Link>
      </div>
      <div>
        <Link to="/prod">Prod</Link>
      </div>
      <div onClick={() => resetJson()}>Clean</div>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  align-items: center;
  background: white;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 20%);
  display: flex;
  height: 70px;
  padding-left: 20px;
  position: relative;
  width: 100%;
  z-index: 2;

  div {
    cursor: pointer;
    margin: 20px;
    text-align: center;

    a {
      color: black;
      text-decoration: none;
    }
  }
`;
