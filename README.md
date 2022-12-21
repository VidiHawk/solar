# Solar platform

Built with React and NextJS.

Install using node v16.16.0 or yarn v1.22.19

## Branches
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

### For locally build
Open you command prompt
`yarn build` (will build locally and generate public directory)
`yarn start` (will start the locally build server at http://loaclhost:3000)
Deploying to Vercel - https://www.youtube.com/watch?v=_8wkKL0LKks

### Other Scripts
Open you command prompt
`yarn lint:fix` (This will format your code and fix auto fixable eslint error)

### Inspirations

- [Google Map Clustering by Leigh Halliday](https://github.com/leighhalliday/google-maps-clustering) for its clustering implementation

- [Google Map Marker by Daw-Chih Liou](https://github.com/DawChihLiou/react-google-maps-marker-demo) for its marker behavior and styling