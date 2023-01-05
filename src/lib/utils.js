export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj);
};

export const pocketbase_url = 'http://127.0.0.1:8090';