import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
    return axios({
        method: 'POST',
        url: apiUrl + '/sign-up/',
        data: {
            credentials: {
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.passwordConfirmation
            }
        }
    })
}

export const signIn = credentials => {
    return axios({
        method: 'POST',
        url: apiUrl + '/sign-in/',
        data: {
            credentials: {
                email: credentials.email,
                password: credentials.password
            }
        }
    })
}

export const signOut = userData => {
    return axios({
      url: apiUrl + '/sign-out/',
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${userData.token}`
      }
    })
  }