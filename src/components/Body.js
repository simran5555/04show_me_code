import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {

    const [list, setList] = useState(resList)
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>
                <button className="filter-btn" 
                onClick={()=>{
                    topRatedRestaurants= resList.filter(
                        (res) => res.data.avgRating > 4
                    )
                    setList(topRatedRestaurants)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {list.map(restaurant =>
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                )}
            </div>
        </div>
    )
}

export default Body