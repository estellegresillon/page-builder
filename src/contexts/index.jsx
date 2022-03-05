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
  const [draggedOverComponent, setDraggedOverComponent] = useState(null);
  const [projectName, setProjectName] = useState(
    getDataFromLocalStorage("project") || "Project Name"
  );
  const [projectFont, setProjectFont] = useState(
    getDataFromLocalStorage("font") || "Gilroy"
  );
  const [transparentMenu, setTransparentMenu] = useState(
    getDataFromLocalStorage("transparentMenu") || true
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
      draggedOverComponent,
      json,
      projectFont,
      projectName,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      setDraggedOverComponent,
      setProjectFont,
      setProjectName,
      setTransparentMenu,
      transparentMenu,
      updateAttributes,
      updateDocument,
    }),
    [
      components,
      draggedOverComponent,
      json,
      projectFont,
      projectName,
      removeComponent,
      resetJson,
      selectComponent,
      selectedComponent,
      setDraggedOverComponent,
      setProjectFont,
      setProjectName,
      setTransparentMenu,
      transparentMenu,
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
