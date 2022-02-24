import styled from "styled-components";

import { useBuilderContext } from "contexts";

const Home = () => {
  const { json, components, selectComponent } = useBuilderContext();

  const handleClick = (e, item) => {
    e.stopPropagation();
    selectComponent(item);
  };

  return (
    <HomeWrapper>
      {json.map((section) => {
        const Component = components[section.componentName];

        return (
          <Component
            key={section.id}
            item={section}
            onClick={(e) => handleClick(e, section)}
          >
            {section.children.map((single) => {
              const Component = components[single.componentName];

              return (
                <Component
                  key={single.id}
                  item={single}
                  onClick={(e) => handleClick(e, single)}
                />
              );
            })}
          </Component>
        );
      })}
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
