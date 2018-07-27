export default function(state = [], action) {
    switch (action.type) {
        case 'GET_USER_ID':
            return [
                ...state,
                action.payload
            ];
            break;
        default:
            return state;
    }
    return state;
}
