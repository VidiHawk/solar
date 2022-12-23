# Solar platform

Built with React and NextJS.

Install using node v16.16.0 or yarn v1.22.19

## Branches

This branch is <b>mapbox<b>

Recap of branches:

- master: initial branch
  
- barebone: forked from master on Dec 5th 2022. The main difference from master is the removal of unused files and directories across the app

- mapbox: forked from barebone on Dec 21st 2022. This is an attempt to use Mapbox GL API instead of the Google Maps API.


## Available Scripts

### From local host

`yarn install`
`yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Deploying to Netlify - https://www.youtube.com/watch?v=TbQ4kWX29lQ

### For local build
Open you command prompt
`yarn build` (will build locally and generate public directory)
`yarn start` (will start the locally build server at http://loaclhost:3000)
Deploying to Vercel - https://www.youtube.com/watch?v=_8wkKL0LKks


### Other Scripts
Open you command prompt
`yarn lint:fix` (This will format your code and fix auto fixable eslint error)

### Ideas

- [Flickering neon text](https://css-tricks.com/how-to-create-neon-text-with-css/)
- [Lightning effect on text](https://dev.to/pankaj_singhr/lightning-effect-using-css-animation-4h3)
- [Neon glitch effect](https://gist.github.com/CodeMyUI/17cba2cb0698753fc21434a53863a23c)

Try to achieve a great user experience when interacting with markers on the map. Check out [AirBnB](https://www.airbnb.ie/s/San-Francisco--CA--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&query=San%20Francisco%2C%20CA%2C%20USA&place_id=ChIJIQBpAG2ahYAR_6128GcTUEo&date_picker_type=calendar&checkin=2022-08-27&checkout=2022-08-31&adults=2&source=structured_search_input_header&search_type=user_map_move&ne_lat=37.8053501277308&ne_lng=-122.37779937848381&sw_lat=37.77496292220189&sw_lng=-122.44955383405022&zoom=15&search_by_map=true&ref=hackernoon.com&locale=en&_set_bev_on_new_domain=1667590370_NzBmMmQwODdlMjY0)