import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { getComponents } from "utils/getBuilderComponents";
import { getDocumentFromLocalStorage } from "utils/localStorage";

const BuilderContext = createContext({
  components: [],
  json: [],
});

export const BuilderProvider = ({ children, components = getComponents() }) => {
  const [json, setJson] = useState(getDocumentFromLocalStorage() || []);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [draggedComponent, setDraggedComponent] = useState(null);

  const selectComponent = useCallback((item) => {
    setSelectedComponent(item);
  }, []);

  const removeComponent = useCallback(
    (component) => {
      const newJson = [...json].filter((section) => {
        return section.id !== component.id;
      });

      setJson(newJson);
      setSelectedComponent(null);
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
    setSelectedComponent(null);
  }, []);

  const value = useMemo(
    () => ({
      components,
      draggedComponent,
      json,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      setDraggedComponent,
      updateAttributes,
      updateDocument,
    }),
    [
      components,
      draggedComponent,
      json,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      setDraggedComponent,
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
