export const setLocalStorage = (name: any, param: any) => {
  localStorage.setItem(name, param);
};

export const getLoacalStorage = (name: any) => {
  const getStorage = localStorage.getItem(name);
  return getStorage;
};

export const removeLoacalStorage = (name: any) => {
  localStorage.removeItem(name);
};

export const clearLoacalStorage = () => {
  localStorage.clear();
};
