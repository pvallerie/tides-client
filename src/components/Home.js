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
                const userLocation = locations.find(element => element.owner.id === user.id)
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
                        const utcSeconds = tides[0].dt
                        const date = new Date(utcSeconds)
                        console.log(`next tide time: ${date}`)
                        // set first tide in tides
                        if (tides[0].type === "High") {
                            high = tides[0].date
                            console.log(tides)
                        } else {
                            low = tides[0].date
                            console.log(tides)
                        }
                        // set second tide in tides
                        if (tides[1].type === "High") {
                            high = tides[1].date
                        } else {
                            low = tides[1].date
                        }
                        return [high, low]
                    })
                    // set tides states
                    .then(tides => {
                        setHighTide(tides[0])
                        setLowTide(tides[1])
                    })
            })
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