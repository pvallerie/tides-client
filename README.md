# tides-client
Frontend of my Tides app.
[Link to Tides API](https://github.com/pvallerie/tides-api)

You set your location and it tells you the next high and low tides.

### To use:
1. While the frontend of this app is deployed to GitHub Pages, it must be run locally until backend is deployed due to CORS configuration.
1. Start server from link to API above.
3. Clone down repo.
4. Install dependencies with `npm install`
5. Run `npm start` to spin up client locally.
6. Create an account or login to see the next tidal extremes (high and low).
7. Change Location functionality is not fully working yet. Soon to come.
8. Sign out and your location preference will be saved until next login.

### Primary Technologies:
- JavaScript
- React
- Bootstrap
- GitHub Pages
- Axios
- 3rd Party APIs:
    - [OpenCage GeoCoding](https://opencagedata.com/) - used to translate the name of a city to coordinates.
    - [WorldTides](https://www.worldtides.info/apidocs) - used to gather tide data based on coordinates.

### To do:
- App does not currently update the page when ChangeLocation is run. Running into an issue with asynchronicity where function is returning before the new tide values have been calculated.
- Adjust date/time data so it reflects user's time zone.
- Add ChangePassword functionality.
- Feature for users to change the date they receive tides for.
- Feature for users to store multiple locations.
- Styling