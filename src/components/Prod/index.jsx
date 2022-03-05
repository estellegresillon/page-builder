import { useEffect, useState } from "react";
import styled from "styled-components";

import Empty from "components/common/Empty";
import ProdMenu from "components/common/ProdMenu";
import { getComponents } from "utils/getBuilderComponents";
import {
  getDataFromLocalStorage,
  getDocumentFromLocalStorage,
} from "utils/localStorage";

import GoBackButton from "./GoBackButton";

const Prod = () => {
  const components = getComponents();
  const [json, setJson] = useState([]);

  useEffect(() => {
    const document = getDocumentFromLocalStorage();
    setJson(document);
  }, []);

  return (
    <ProdWrapper $font={getDataFromLocalStorage("font")}>
      <ProdMenu />
      {json?.length > 0 ? (
        json.map((section) => {
          if (!section?.componentName) {
            return null;
          }

          const Section = components[section.componentName];

          return <Section item={section} key={section.id} />;
        })
      ) : (
        <Empty text="Create your page in the builder." />
      )}
      <GoBackButton />
    </ProdWrapper>
  );
};

export default Prod;

const ProdWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  font-family: ${({ $font }) => $font};
  width: 100%;
`;
