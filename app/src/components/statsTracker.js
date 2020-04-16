import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import '../App.css';

import { fetchStats } from '../store/actions/statsAction';

const StatsTracker = props => {
    useEffect(() => {

        props.fetchStats();
    }, [])

    return(
        <div className="card">
            <div className="anotherCard">
                <h1>My Fortnite Stats</h1>
                {props.isFetching && (
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                )}

                <h2>Username: {props.stats.epicUserHandle}</h2>
                <h3>Platform: {props.stats.platformNameLong}</h3>

                {props.lifeTimeStats.map((item) => (
                    <p key={item.id}>{item.key}: {item.value}</p>
            ))}
            </div>
                  
        </div>
        
    )
}

const mapStateToProps = state => {
    console.log('from mapstatetoprops',state.statsReducer.stats.lifeTimeStats)
    return {
        stats: state.statsReducer.stats,
        lifeTimeStats: state.statsReducer.lifeTimeStats,
        isFetching:state.statsReducer.isFetching,
        error:state.statsReducer.error
    }
}

export default connect(
    mapStateToProps,
    { fetchStats }
)(StatsTracker)