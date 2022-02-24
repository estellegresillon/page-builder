import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { getComponents } from "utils/getBuilderComponents";
import { createNewItem } from "utils/helpers";
import { getDocumentFromLocalStorage } from "utils/localStorage";

const BuilderContext = createContext({
  addComponent: () => {},
  components: [],
  json: [],
});

export const BuilderProvider = ({ children, components = getComponents() }) => {
  const [json, setJson] = useState(getDocumentFromLocalStorage() || []);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const selectComponent = useCallback((item) => {
    setSelectedComponent(item);
  }, []);

  const addComponent = useCallback(
    ({ componentName, componentType }) => {
      const newChild = createNewItem({
        componentName,
        componentType,
        attributes: {},
        children: [],
      });

      if (componentType === "Section") {
        setJson((prevState) => [...prevState, newChild]);
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

        const parentId = json[parentIndex].id;
        newChild.parentId = parentId;

        let newJson = [...json];
        let parent = { ...newJson[parentIndex] };
        parent.children = [...parent.children, newChild];
        newJson[parentIndex] = parent;

        setJson(newJson);
      }
    },
    [json, selectedComponent]
  );

  const removeComponent = useCallback(
    (component) => {
      if (component.componentType === "Section") {
        const newJson = [...json].filter((section) => {
          return section.id !== component.id;
        });

        setJson(newJson);
      }

      if (component.componentType === "Single") {
        const parentIndex = json.findIndex(
          (sections) => sections.id === component.parentId
        );

        const newJson = [...json];
        let siblings = newJson[parentIndex].children;

        const newSiblings = siblings.filter((single) => {
          return single.id !== component.id;
        });

        newJson[parentIndex].children = newSiblings;

        setJson(newJson);
      }
    },
    [json]
  );

  const resetJson = useCallback(() => {
    setJson([]);
  }, []);

  const value = useMemo(
    () => ({
      addComponent,
      components,
      json,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
    }),
    [
      addComponent,
      components,
      json,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
    ]
  );

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
};

export const useBuilderContext = () => useContext(BuilderContext);

export default BuilderContext;
