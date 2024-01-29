import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src="https://www.logodesign.net/logo-new/heart-shaped-prawn-merged-with-two-hands-holding-8398ld.png?nwm=1&nws=1&industry=food" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">SEARCH</div>
            <div className="restaurant-container">
                <RestaurantCard />
            </div>
        </div>
    )
}


const App = () => {
  return (
    <div className='app'>
        <Header />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
