import React, { useState, useEffect, Fragment } from 'react'
import { indexLocations, getCoordinates, getTides } from '../api/tides'
import axios from 'axios'

const Home = props => {
    const { user } = props
    const [location, setLocation] = useState('')
    const [highTide, setHighTide] = useState(null)
    const [lowTide, setLowTide] = useState(null)


    // when page loads
    useEffect(() => {
        // get user's location
        indexLocations(user)
            .then(res => {
                // extract locations from response
                const locations = res.data.locations
                // extract location that user created from locations array
                const userLocation = locations.find(element => element.owner.id === 1)
                setLocation(userLocation)
                return userLocation
            })
            // get location lat/long
            .then(userLocation => {
                const openCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=${userLocation.name}&key=4c4a96fe14474c8097b3f465760faede&countrycode=us`
                axios.get(openCageUrl)
                    .then(res => {
                        // pull first result
                        const firstResult = res.data.results[0]
                        // extract lat and lng
                        const lat = firstResult.geometry.lat
                        const lng = firstResult.geometry.lng
                        return [lat, lng]
                    })
                    // get tides
                    .then(coordinates => {
                        const lat = coordinates[0]
                        const lng = coordinates[1]
                        const worldTidesUrl = `https://www.worldtides.info/api/v2?extremes&date=today&lat=${lat},&lon=${lng}&key=b3b2c2e6-070f-4d4c-927e-ae381d5beef6&timezone&localtime`
                        const promise = axios.get(worldTidesUrl)
                        return promise
                    })
                    // extract next high and low
                    .then(promise => {
                        let high = null
                        let low = null
                        const tides = promise.data.extremes
                        // get current date/time (in seconds since unix epox)
                        const currentTime = `${Date.now()}`
                        // set first tide in tides
                        if (tides[0].type === "High") {
                            console.log('it is high')
                            high = tides[0].dt
                        } else {
                            low = tides[0].dt
                        }
                        // set second tide in tides
                        if (tides[1].type === "High") {
                            console.log('it is high')
                            high = tides[1].dt
                        } else {
                            low = tides[1].dt
                        }
                        return [high, low]
                    })
                    .then(tides => {
                        setHighTide(tides[0])
                        setLowTide(tides[1])
                    })
            })
        // set tides states
    }, [])
    
    return (
        <Fragment>
            <p>Location: {location.name}</p>
            <p>Next High: {highTide}</p>
            <p>Next Low: {lowTide}</p>
        </Fragment>
    )
}

export default Home