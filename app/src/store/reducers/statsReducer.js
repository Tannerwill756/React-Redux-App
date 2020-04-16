const initialState = {
    stats: [],
    lifeTimeStats: [],
    isFetching: false,
    error: ''
}

export const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STATS_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_STATS_SUCCESS_2':
            return {
                ...state,
                lifeTimeStats: action.payload,
                isFetching: false,
                error: ''
            }
        case 'FETCH_STATS_SUCCESS':
            return {
                ...state,
                stats: action.payload ,
                isFetching: false,
                error: ''                
            }
            
        case 'FETCH_STATS_FAILURE':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}