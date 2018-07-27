export const select = (id) => {
    return {
        type: 'USE_API_BY_ID',
        payload: id
    }
};