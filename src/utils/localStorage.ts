export const saveDocumentInLocalStorage = (json: object) => {
  localStorage.setItem('builderJson', JSON.stringify(json));
};

export const getDocumentFromLocalStorage = () => {
  const json = localStorage.getItem('builderJson');
  return json ? JSON.parse(json) : [];
};

export const saveDataInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(`${key}-pb`, value);
};

export const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(`${key}-pb`);
};
