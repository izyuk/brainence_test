export const select = (id) => {
    return {
        type: 'GET_USER_ID',
        payload: id
    }
};