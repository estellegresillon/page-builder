import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { getComponents } from "utils/getBuilderComponents";
import { createNewItem } from "utils/helpers";

const BuilderContext = createContext({
  addComponent: () => {},
  components: [],
  json: [],
});

export const BuilderProvider = ({ children, components = getComponents() }) => {
  const [json, setJson] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const selectComponent = useCallback((item) => {
    setSelectedComponent(item);
  }, []);

  const addComponent = useCallback(
    ({ componentName, componentType }) => {
      const newChildren = createNewItem({
        componentName,
        componentType,
        attributes: {},
        children: [],
      });

      if (componentType === "Section") {
        setJson((prevState) => [...prevState, newChildren]);
      }

      if (componentType === "Single") {
        if (
          !selectedComponent ||
          selectedComponent.componentType !== "Section"
        ) {
          console.log("select a parent");
          return;
        }

        const parentIndex = json.findIndex(
          (sections) => sections.id === selectedComponent.id
        );

        let newJson = [...json];
        let parent = { ...newJson[parentIndex] };
        parent.children = [...parent.children, newChildren];
        newJson[parentIndex] = parent;

        setJson(newJson);
      }
    },
    [json, selectedComponent]
  );

  const value = useMemo(
    () => ({
      components,
      json,
      addComponent,
      selectComponent,
      selectedComponent,
    }),
    [addComponent, components, json, selectComponent, selectedComponent]
  );

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
};

export const useBuilderContext = () => useContext(BuilderContext);

export default BuilderContext;
