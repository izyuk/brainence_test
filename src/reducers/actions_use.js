export default function(state = [], action) {
    switch (action.type) {
        case 'USE_API_BY_ID':
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }

            ];
            break;
        default:
            return state
    }
    return state;
}
