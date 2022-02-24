import * as allComponents from "components/BuilderComponents";

export const getComponents = () =>
  Object.keys(allComponents).reduce((result, key) => {
    const component = allComponents[key];
    result[component.componentName] = component;
    return result;
  }, {});
