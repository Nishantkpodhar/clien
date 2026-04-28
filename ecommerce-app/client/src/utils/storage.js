export const loadFromStorage = (key) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
