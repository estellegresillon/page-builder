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

  const updateDocument = useCallback((json) => {
    setJson(json);
  }, []);

  const moveSingles = useCallback(
    (parentId, sourceIndex, destinationIndex) => {
      const newJson = [...json];
      const parent = newJson.filter((section) => section.id === parentId)[0];
      const items = parent.children;
      const [reorderedItem] = items.splice(sourceIndex, 1);
      items.splice(destinationIndex, 0, reorderedItem);
      parent.children = items;

      const sectionIndex = newJson.findIndex(
        (sections) => sections.id === parent.id
      );
      newJson[sectionIndex] = parent;

      setJson(newJson);
    },
    [json]
  );

  const updateAttributes = useCallback(
    (sectionId, attributes) => {
      const newJson = [...json];
      const component = newJson.filter((section) => {
        return section.id === sectionId;
      });

      component[0].attributes = attributes;
      setJson(newJson);
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
      moveSingles,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      updateAttributes,
      updateDocument,
    }),
    [
      addComponent,
      components,
      json,
      moveSingles,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      updateAttributes,
      updateDocument,
    ]
  );

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
};

export const useBuilderContext = () => useContext(BuilderContext);

export default BuilderContext;
