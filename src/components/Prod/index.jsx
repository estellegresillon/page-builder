import { useEffect, useState } from "react";
import styled from "styled-components";

import { getComponents } from "utils/getBuilderComponents";
import { getDocumentFromLocalStorage } from "utils/localStorage";

const Prod = () => {
  const components = getComponents();
  const [json, setJson] = useState([]);

  useEffect(() => {
    const document = getDocumentFromLocalStorage();
    setJson(document);
  }, []);

  return (
    <ProdWrapper>
      {json?.length !== 0 ? (
        json.map((section) => {
          const Section = components[section.componentName];

          return (
            <Section item={section} key={section.id}>
              {section.children.map((single) => {
                const Single = components[single.componentName];

                return <Single item={single} key={single.id} />;
              })}
            </Section>
          );
        })
      ) : (
        <div>Create your page in the page builder</div>
      )}
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
