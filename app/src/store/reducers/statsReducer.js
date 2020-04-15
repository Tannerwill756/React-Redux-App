const initialState = {
    stats:''
}

export const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STATS_START':
            return {
                ...state,
                stats: action.payload
            }

        default:
            return state;
    }
}