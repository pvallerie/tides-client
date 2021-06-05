import React, { useState, useEffect, Fragment } from 'react'

const Home = props => {
    const { user } = props
    const [location, setLocation] = useState(null)
    const [highTide, setHighTide] = useState(null)
    const [lowTide, setLowTide] = useState(null)

    // when page loads
        // get user's location
        // get location lat/long
        // get tides
        // set tides states
    
    return (
        <Fragment>
            <p>{user.email}, you've made it home!</p>
            <p>Next High: {highTide}</p>
            <p>Next Low: {lowTide}</p>
        </Fragment>
    )
}

export default Home