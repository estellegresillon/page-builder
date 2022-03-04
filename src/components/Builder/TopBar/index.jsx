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
      <div className="routes">
        <Item>
          <Link to="/">Page Builder</Link>
        </Item>
        <Item>
          <Link to="/prod" target="_blank" rel="noopener noreferer">
            Live preview
          </Link>
        </Item>
      </div>
      <div className="actions">
        <Item onClick={() => handleSaveDocument()}>Save</Item>
        <Item onClick={() => resetJson()}>Start over</Item>
      </div>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  align-items: center;
  background-color: #252628;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 30%);
  color: white;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  width: calc(100% - 40px);
  z-index: 2;

  .routes,
  .actions {
    display: flex;
  }
`;

const Item = styled.div`
  cursor: pointer;
  margin: 20px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
  }
`;
