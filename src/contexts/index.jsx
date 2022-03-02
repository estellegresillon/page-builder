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

  const addComponent = useCallback(({ componentName }) => {
    const newChild = createNewItem({
      componentName,
      attributes: {},
      children: [],
    });

    setJson((prevState) => [...prevState, newChild]);
  }, []);

  const removeComponent = useCallback(
    (component) => {
      const newJson = [...json].filter((section) => {
        return section.id !== component.id;
      });

      setJson(newJson);
    },
    [json]
  );

  const updateDocument = useCallback((json) => {
    setJson(json);
  }, []);

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
