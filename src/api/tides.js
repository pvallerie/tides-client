import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Location
export  const createLocation = (userData) => {
    return axios({
        url: apiUrl + '/locations',
        method: 'POST',
        headers: {
            'Authorization': `Token ${userData.token}`
        },
        data: {
            location: {
                name: userData.location
            }
        }
    })
}

// Get Location
export const indexLocations = (userData) => {
    return axios({
        url: apiUrl + '/locations',
        method: 'GET',
        headers: {
            'Authorization': `Token ${userData.token}`
        }
    })
}

// Update Location
export const updateLocation = (id, location, userData) => {
    return axios({
        url: apiUrl + '/locations/' + id + '/',
        method: 'PATCH',
        headers: {
            'Authorization': `Token ${userData.token}`
        },
        data: { location }
    })
}

// // Get Coordinates
// export const getCoordinates = (openCageUrl) => {
//     return axios({
//         url: openCageUrl,
//         method: 'GET'
//     })
// }


