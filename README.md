# WORKING OF THE APP
- npm i (to install all the dependencies)
- npm run start or npm start for dev build
- npm run build for production build

# make the layout of the app - UI mock
- header
--- logo
--- nav-items
- body
--- search-bar
--- res-container
----- res-cards
-footer
--- made by (there can be more)

# styles - styles in jsx are written as objects 
- const styleCard = {
    backgroundColor : "red"
}
or
- <div style={{backgroundColor : 'red'}}></div>
or 
- <div style={styleCard}></div>

# props
- arguments to a function
- props is sent as an object or destructured
- sending as an object 
--- used inside the component (props) as props.resName, props.cuisines etc
- or when destructured ({resName, cuisines})

# config driven UI

# keys are essentially required by react for optimization of the app
- when a new item is added in the long list and positioned at an x index, the react app does not render all the items but only the newly added item

# never use index as key - ALWAYS USE UNIQUE KEY
- it works but hinders optimization as it messes up the positioning system of react and leads to the rerendering of all the items
