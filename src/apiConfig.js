let apiUrl
const apiUrls = {
  production: 'https://tides-api.herokuapp.com',
  development: 'http://localhost:8000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl