import axios from 'axios'

// function to get tides
export const setTides = (userLocation) => {
    // array to return with next high and low tides
    let nextTides = []

    const makeApiCalls = () => {
        // get location lat/long
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
                // // get current date/time (in seconds since unix epox)
                // const utcSeconds = tides[0].dt
                // const date = new Date(utcSeconds)
                // set first tide in tides
                if (tides[0].type === "High") {
                    high = tides[0].date
                } else {
                    low = tides[0].date
                }
                // set second tide in tides
                if (tides[1].type === "High") {
                    high = tides[1].date
                } else {
                    low = tides[1].date
                }
                return nextTides = [high, low]
            })
    }

    makeApiCalls()
    
    console.log('nextTides: ', nextTides)
    return nextTides
}