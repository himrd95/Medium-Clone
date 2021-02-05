// Save data to sessionStorage
const setSession = (key) => {
  try {
    let data = sessionStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return;
  }
};
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage

const getSession = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};
// let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
const removeUser = (key) => {
  sessionStorage.removeItem(key);
};

export { removeUser, getSession, setSession };

// Remove all saved data from sessionStorage
sessionStorage.clear();
