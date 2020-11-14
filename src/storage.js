const get = key => {
  try {
    const getKey = localStorage.getItem(key);
    return getKey === null ? undefined : JSON.parse(getKey);
  } catch (err) {
    console.log('MY ERROR:', err);
  }
};

const set = (key, value) => {
  try {
    const jsonFormatString = JSON.stringify(value);
    localStorage.setItem(key, jsonFormatString);
  } catch (err) {
    console.log('ERROR:', err);
  }
};

export default { get, set };