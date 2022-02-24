import { useEffect, useState } from "react";
import styled from "styled-components";

import { useBuilderContext } from "contexts";
import { getDocumentFromLocalStorage } from "utils/localStorage";

const Prod = () => {
  const { components } = useBuilderContext();
  const [json, setJson] = useState([]);

  useEffect(() => {
    const document = getDocumentFromLocalStorage();
    setJson(document);
  }, []);

  return (
    <ProdWrapper>
      {json.map((section) => {
        const Component = components[section.componentName];

        return (
          <Component key={section.id} item={section}>
            {section.children.map((single) => {
              const Component = components[single.componentName];

              return <Component key={single.id} item={single} />;
            })}
          </Component>
        );
      })}
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
  width: 100%;
`;
