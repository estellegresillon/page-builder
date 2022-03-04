import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import IconClean from "components/common/IconClean";
import IconSettings from "components/common/IconSettings";
import IconSave from "components/common/IconSave";
import Notification from "components/common/Notification";
import ProjectModal from "components/common/ProjectModal";
import { useBuilderContext } from "contexts";
import { saveDocumentInLocalStorage } from "utils/localStorage";

const TopBar = () => {
  const { resetJson, json } = useBuilderContext();
  const [isSaved, setIsSaved] = useState(false);
  const [isCustomizeOpen, setCustomizeOpen] = useState(false);

  const handleSaveDocument = () => {
    saveDocumentInLocalStorage(json);
    setIsSaved(true);
  };

  useEffect(() => {
    let timer;

    if (isSaved) {
      timer = setTimeout(() => {
        setIsSaved(false);
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [isSaved]);

  return (
    <TopBarWrapper>
      <div className="routes">
        <Item>
          <Link to="/">
            <strong>Page Builder</strong>
            <span className="demo-tag">demo</span>
          </Link>
        </Item>
        <Item onClick={() => handleSaveDocument()}>
          <Link to="/prod">Live preview</Link>
        </Item>
      </div>
      <div className="actions">
        <Item className="action-button" onClick={() => setCustomizeOpen(true)}>
          <IconSettings />
          Customize
        </Item>
        {isCustomizeOpen && (
          <ProjectModal onClose={() => setCustomizeOpen(false)} />
        )}
        <Item className="action-button" onClick={() => handleSaveDocument()}>
          <IconSave />
          Save
        </Item>
        <Item className="action-button" onClick={() => resetJson()}>
          <IconClean />
          Start over
        </Item>
      </div>
      {isSaved && <Notification text="Successfully saved !" />}
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

  .demo-tag {
    background: #d40c0c;
    border-radius: 5px;
    font-size: 11px;
    font-weight: bolder;
    margin-left: 10px;
    padding: 3px 5px;
    text-transform: uppercase;
  }

  .routes,
  .actions {
    display: flex;
    position: relative;
  }

  .actions {
    font-weight: bolder;

    .action-button {
      background-color: #252628;
      border-radius: 5px;
      box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
      margin: 20px 10px;
      padding: 7px 10px;

      &:hover {
        background-color: #36383b;
      }
    }

    svg {
      color: white;
      height: 12px;
      margin-right: 5px;
      width: 12px;
    }
  }
`;

const Item = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;

  a {
    color: white;
    margin: 20px;
    text-decoration: none;
  }
`;
