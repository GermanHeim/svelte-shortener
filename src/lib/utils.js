export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj);
};

export const pocketbase_url = 'http://127.0.0.1:8090';

export const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');
  return !!pattern.test(str);
};

export const generateRandomSlug = () => {
  [...Array(Math.floor(Math.random() * (10 - 5 + 1)) + 5)].map(()=>(~~(Math.random()*36)).toString(36)).join('');
};