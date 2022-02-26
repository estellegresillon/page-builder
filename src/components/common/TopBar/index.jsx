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
  height: 60px;
  position: relative;
  width: 100px;

  div {
    margin: 20px;
    text-align: center;
  }
`;
