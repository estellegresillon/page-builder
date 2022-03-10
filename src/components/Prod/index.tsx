import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Empty from 'components/common/Empty';
import ProdMenu from 'components/common/ProdMenu';
import { getComponents } from 'utils/getBuilderComponents';
import {
  getDataFromLocalStorage,
  getDocumentFromLocalStorage,
} from 'utils/localStorage';

import GoBackButton from './GoBackButton';
import { IItem } from 'types/component';

const Prod = () => {
  const components = getComponents();
  const [json, setJson] = useState([]);

  useEffect(() => {
    const document = getDocumentFromLocalStorage();
    setJson(document);
  }, []);

  return (
    <ProdWrapper $font={getDataFromLocalStorage('font') || ''}>
      <ProdMenu />
      {json?.length > 0 ? (
        json.map((section) => {
          const mappedSection = section as IItem;

          if (!mappedSection?.componentName) {
            return null;
          }

          // @ts-ignore
          const Section = components[mappedSection.componentName];

          return <Section item={section} key={mappedSection.id} />;
        })
      ) : (
        <Empty text="Create your page in the builder." />
      )}
      <GoBackButton />
    </ProdWrapper>
  );
};

export default Prod;

const ProdWrapper = styled.div<{ $font: string }>`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  font-family: ${({ $font }) => $font};
  width: 100%;
`;
