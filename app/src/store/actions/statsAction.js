import axios from 'axios';

export const fetchStats = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_STATS_START' });
        axios
            .get('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/pc/its%20twillz', {
                headers: {
                    'TRN-Api-Key':'fe7dfe0d-b59d-4b09-b6ae-59110d7b29e9'
                }
            })
            .then(response => {
                console.log(response)
                // dispatch({ type: 'FETCH_STATS_SUCCESS', payload: response})
            })
            .catch(error => {
                console.log('ERROR FETCHING DATA',error);
            })
    }
}