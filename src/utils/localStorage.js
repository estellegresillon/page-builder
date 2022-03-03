export const saveDocumentInLocalStorage = (json) => {
  localStorage.setItem("builderJson", JSON.stringify(json));
};

export const getDocumentFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("builderJson")) || [];
};
