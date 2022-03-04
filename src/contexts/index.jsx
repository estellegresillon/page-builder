import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { getComponents } from "utils/getBuilderComponents";
import {
  getDataFromLocalStorage,
  getDocumentFromLocalStorage,
} from "utils/localStorage";

const BuilderContext = createContext({
  components: [],
  json: [],
});

export const BuilderProvider = ({ children, components = getComponents() }) => {
  const [json, setJson] = useState(getDocumentFromLocalStorage() || []);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [projectName, setProjectName] = useState(
    getDataFromLocalStorage("project") || "Project Name"
  );
  const [projectFont, setProjectFont] = useState(
    getDataFromLocalStorage("font") || "Gilroy"
  );

  const selectComponent = useCallback((item) => {
    setSelectedComponent(item);
  }, []);

  const removeComponent = useCallback(
    (component) => {
      const newJson = [...json].filter((section) => {
        return section.id !== component.id;
      });

      setJson(newJson);

      setTimeout(() => {
        setSelectedComponent(null);
      }, 100);
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
      })[0];

      component.attributes = { ...component.attributes, ...attributes };

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
      projectFont,
      projectName,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      setDraggedComponent,
      setProjectFont,
      setProjectName,
      updateAttributes,
      updateDocument,
    }),
    [
      components,
      draggedComponent,
      json,
      projectFont,
      projectName,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      setDraggedComponent,
      setProjectFont,
      setProjectName,
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
