export const saveDocumentInLocalStorage = (json) => {
  localStorage.setItem("builderJson", JSON.stringify(json));
};

export const getDocumentFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("builderJson")) || [];
};

export const saveDataInLocalStorage = (key, value) => {
  localStorage.setItem(`${key}-pb`, value);
};

export const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(`${key}-pb`) || "";
};
