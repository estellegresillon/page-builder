import { useEffect, useState } from "react";
import styled from "styled-components";

import Empty from "components/common/Empty";
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
      {json?.length > 0 ? (
        json.map((section) => {
          if (!section?.componentName) {
            return null;
          }

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
        <Empty text="Create your page in the page builder." />
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
