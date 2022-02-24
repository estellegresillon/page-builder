export const saveDocumentInLocalStorage = (json) => {
  localStorage.setItem("json", JSON.stringify(json));
};

export const getDocumentFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("json"));
};
