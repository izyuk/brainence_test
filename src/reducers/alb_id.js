export default function(state = [], action) {
    switch (action.type) {
        case 'GO_ALBUM':
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