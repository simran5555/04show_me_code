## WORKING OF THE APP
- npm i (to install all the dependencies)
- npm run start or npm start for dev build
- npm run build for production build

# episode 4

## make the layout of the app - UI mock
- header
--- logo
--- nav-items
- body
--- search-bar
--- res-container
------ res-cards
-footer
--- made by (there can be more)

## styles - styles in jsx are written as objects 
- const styleCard = {
    backgroundColor : "red"
}
or
- <div style={{backgroundColor : 'red'}}></div>
or 
- <div style={styleCard}></div>

## props
- arguments to a function
- props is sent as an object or destructured
- sending as an object 
used inside the component (props) as props.resName, props.cuisines etc
- or when destructured ({resName, cuisines})

## config driven UI

## keys are essentially required by react for optimization of the app
- when a new item is added in the long list and positioned at an x index, the react app does not render all the items but only the newly added item

## never use index as key - ALWAYS USE UNIQUE KEY
- it works but hinders optimization as it messes up the positioning system of react and leads to the rerendering of all the items

# episode 5

## never keep hardcoded strings or objects/arrays in the components
- make a seperate utils or public or common folder
- utils - constants.js //to keep all the constants like CDN_URL, LOGO_URL
- utils - mockData.js for the resList

## exporting and importing of multiple items from a single file
- export const CDN_URL 
- export const LOGO_URL
OR 
- export {CDN_URL, LOGO_URL}
- import {CDN_URL} from filesrc

you can also do both default and named exports from a single file

## named imports
- {} are used 
- the variable is used inside { } because it is js thing

## types of export and imports
- default
export default Component
import Component from "path"
- named
export const Component
import {Component} from "path

## using hooks
- import {useState} from "react"
- const [list, setList] = useState(resList)

## react is fast. why?
- react uses virtual dom and diff algo/react fiber/reconciliation algo
- keeps data layer in sync with UI.
- virtual dom is representation of the actual DOM (IT IS AN OBJECT - THE REACT ELEMENT)
- it makes virtual DOM at every state and when there is any difference in the old and new DOM, it rerenders the component

## incremental rendering

## reconciliation
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

## fibers
- much lower-level abstraction
- a concept of ReactJS that is used to render a system faster and smoother
- JavaScript object that contains information about a component, its input, and its output.
- A fiber corresponds to a stack frame, but it also corresponds to an instance of a component.
- flush
To flush a fiber is to render its output onto the screen.
- work-in-progress
A fiber that has not yet completed; conceptually, a stack frame which has not yet returned.
- the output of a fiber is the return value of a function.
- output is created only at the leaf nodes by host components. The output is then transferred up the tree.

# episode 6
- useEffect(()=>{
        console.log("useEffect")
    },[])
    console.log("rendered")
// component is rendered before calling useEffect

# episode 7

## react routing
- import {createBrowserRouter, RouterProvider} from "react-router-dom"
- createBrowserRouter is a function that takes an array of path and element objects
- const AppRouter = createBroswerRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about",
        element: <About />
    } //and so on
])
- root.render(<RouterProvider router={App} />)


# episode 8 
## class based components

### Why do we need super(props)?
- So, the simple answer to this question is that this thing basically allows accessing this.props in a Constructor function. In fact, what the super() function does is, calls the constructor of the parent class.

--- userclass state update example
<button onClick={() => {
            this.setState({
                count : this.state.count +1
            })
}}>click</button>

## life cycle
### mounting
dummy constructor
dummy render
dom with dummy
component mounted
API call
state variable updated

### update

render api data
html loaded with api data
compnentdidupdate

### unmount
willunmount cleanup
some code keeps going on and on even when the parent is unmounted so do a cleanup like 
cleanInterval(timer) 

return () => {
    //works after component is unmounted
}

## why cant we async in useeffect
Asynchronous functions, such as those declared with async, implicitly return a Promise.
Since a Promise is not a valid return type for useEffect, directly using an async function as the effect callback would violate this expectation.

## custom hooks
- utility functions