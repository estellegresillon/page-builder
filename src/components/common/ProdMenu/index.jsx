import styled from "styled-components";

import { useBuilderContext } from "contexts";

const ProdMenu = () => {
  const { projectName, transparentMenu } = useBuilderContext();

  return (
    <ProdMenuWrapper $transparentMenu={transparentMenu}>
      <div className="project-logo">
        <Item>{projectName}</Item>
      </div>
      <div className="project-menu">
        <Item>Portfolio</Item>
        <Item>About</Item>
      </div>
    </ProdMenuWrapper>
  );
};

export default ProdMenu;

const ProdMenuWrapper = styled.div`
  align-items: center;
  background-color: ${({ $transparentMenu }) =>
    $transparentMenu ? "transparent" : "white"};
  color: ${({ $transparentMenu }) => ($transparentMenu ? "white" : "black")};
  display: flex;
  height: 90px;
  justify-content: space-between;
  left: 0;
  padding: 0 30px;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: calc(100% - 60px);
  z-index: 2;

  .project-logo {
    font-size: 20px;
    font-weight: bolder;
  }

  .project-menu {
    font-size: 16px;
    display: flex;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }

  body#force-mobile & {
    padding: 0;
    width: 100%;
  }
`;

const Item = styled.div`
  cursor: pointer;
  margin: 20px;
  text-align: center;
  text-decoration: none;
`;
