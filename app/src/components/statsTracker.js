import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { fetchStats } from '../store/actions/statsAction';

const StatsTracker = props => {
    useEffect(() => {
        props.fetchStats();
    }, [])

    return(
        <div>
            <h2>My Fortnite Stats</h2>
                            
        </div>
        
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        stats: state.statsReducer.stats
    }
}

export default connect(
    mapStateToProps,
    { fetchStats }
)(StatsTracker)