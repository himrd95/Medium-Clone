const setAuth = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return;
  }
};

const getAuth = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { setAuth, getAuth };
